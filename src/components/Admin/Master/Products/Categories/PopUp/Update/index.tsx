import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { validationSchema } from "./validationScema";
import { useContext, useEffect, useRef } from "react";
import * as El from "./UpdateElement";
import FormsControl from "../../../../../../otherComps/Forms/FormsControl";
import Button from "../../../../../../otherComps/Buttons/Button";
import LoadingWrapper from "../../../../../../otherComps/Loading/LoadingWrapper";
import { AdminContext } from "../../../../../../../contexts/AdminNavCtx";
import Detail from "../Detail";
import { useGQLCategory, useGQLUpdateCategory } from "../../useGQLCategory";
import { formCategory } from "../../../../../../../data/form";
import PopUpHeader from "../../../../../../otherComps/PopUpHeader";
import { TFormUpdateCategory } from "../../../../../../../types/category";
import ShowMessage from "../../../../../../otherComps/ShowMessage";

const Update = ({ id }) => {
  const { dispatch } = useContext(AdminContext);
  const { register, handleSubmit, formState, reset, clearErrors, setValue } =
    useForm<TFormUpdateCategory>({
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
  } = useGQLCategory({ categoryId: id });
  const {
    updateCategory,
    loading: loadUpdate,
    error: errorUpdate,
  } = useGQLUpdateCategory();

  const onSubmit = async (values: TFormUpdateCategory) => {
    await updateCategory({ categoryId: id, ...values })
      .then(({ data }) =>
        dispatch({
          type: "SHOW_POPUP",
          value: { name: "categoryDetail", value: data.updateCategory.id },
        })
      )
      .catch(() => {});
  };
  useEffect(() => {
    if (dataInit) {
      setValue("name", dataInit.name);
      setValue("group", dataInit.group);
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
            <FormsControl
              control="select"
              name="group"
              register={register}
              label="Group"
              options={formCategory.group}
              error={errors.group ? true : false}
              message={errors.group ? "Required" : null}
              disabled={loadUpdate}
              isLoading={loadInit}
              clearError={clearErrors}
            />
            <El.SubmitWrapper>
              <Button
                type="submit"
                name="Edit"
                isLoading={loadUpdate}
                disabled={loadInit}
              />
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
