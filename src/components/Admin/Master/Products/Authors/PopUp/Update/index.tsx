import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { validationSchema } from "./validationScema";
import { useContext, useEffect } from "react";
import * as El from "./UpdateElement";
import { TFormAuthor } from "../../../../../../../types/Forms";
import FormsControl from "../../../../../../otherComps/Forms/FormsControl";
import Button from "../../../../../../otherComps/Buttons/Button";
import LoadingWrapper from "../../../../../../otherComps/Loading/LoadingWrapper";
import { AdminNavCtx } from "../../../../../../../contexts/AdminNavCtx";
import { useGQLUpdateAuthor, useGQLAuthor } from "../../useGQLAuthor";
import PopUpHeader from "../../../../../../otherComps/PopUpHeader";
import { TFormUpdateAuthor } from "../../../../../../../types/author";
import ShowMessage from "../../../../../../otherComps/ShowMessage";

const Update = ({ id }) => {
  const { dispatch } = useContext(AdminNavCtx);
  const { register, handleSubmit, formState, setValue } = useForm<TFormAuthor>({
    mode: "all",
    reValidateMode: "onChange",
    defaultValues: {},
    shouldFocusError: true,
    resolver: yupResolver(validationSchema),
  });
  const { errors } = formState;
  const {
    data: dataInit,
    error: errorInit,
    loading: loadInit,
  } = useGQLAuthor({ authorId: id });
  const {
    updateAuthor,
    data,
    loading: loadUpdate,
    error: errorUpdate,
  } = useGQLUpdateAuthor();

  const onSubmit = async (values: TFormUpdateAuthor) => {
    await updateAuthor({ authorId: id, ...values }).then(({ data }) => {
      dispatch({
        type: "SHOW_POPUP",
        value: { name: "AUTHOR_DETAIL", value: data.updateAuthor.id },
      });
    });
  };
  useEffect(() => {
    if (dataInit) {
      setValue("name", dataInit.name);
    }
  }, [dataInit]);
  return (
    <El.Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <El.Section>
        <PopUpHeader
          title="Edit"
          close={() => dispatch({ type: "CLOSE_POPUP" })}
        />
        <El.Body>
          <ShowMessage message={errorUpdate?.message} color="danger" />
          <El.Form onSubmit={handleSubmit(onSubmit)}>
            <FormsControl
              control="input"
              type="text"
              name="name"
              register={register}
              label="Name"
              error={errors.name ? true : false}
              disabled={loadUpdate}
              isLoading={loadInit}
              message={errors.name ? errors.name.message : null}
            />
            <El.SubmitWrapper>
              <Button type="submit" name="Edit" disabled={false} />
              <Button
                name="Cancel"
                type="button"
                disabled={loadUpdate}
                onClick={() => dispatch({ type: "CLOSE_POPUP" })}
              />
            </El.SubmitWrapper>
          </El.Form>
        </El.Body>
      </El.Section>
    </El.Container>
  );
};

export default Update;
