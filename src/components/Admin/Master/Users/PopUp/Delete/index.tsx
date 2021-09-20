import * as El from "./DeleteELement";
import Button from "../../../../../otherComps/Buttons/Button";
import { useContext, useEffect, useRef } from "react";
import { AdminNavCtx } from "../../../../../../contexts/AdminNavCtx";
import { useGQLUserDelData, useGQLDeleteUser } from "../../useGQLUser";
import PopUpHeader from "../../../../../otherComps/PopUpHeader";
import ShowMessage from "../../../../../otherComps/ShowMessage";
import { useForm } from "react-hook-form";
import { validationSchema } from "../../PopUp/Delete/validationScema";
import { yupResolver } from "@hookform/resolvers/yup";
import FormsControl from "../../../../../otherComps/Forms/FormsControl";
const Delete = ({ userId }) => {
  const htmlElRef = useRef(null);

  const { deleteUser, error, loading } = useGQLDeleteUser();
  const {
    data: dataInit,
    error: errorInit,
    loading: loadingInit,
  } = useGQLUserDelData({ userId });
  const { dispatch } = useContext(AdminNavCtx);

  type TFormDel = { username: string };
  const { register, handleSubmit, formState, setError } = useForm<TFormDel>({
    mode: "all",
    reValidateMode: "onChange",
    defaultValues: {},
    shouldFocusError: true,
    resolver: yupResolver(validationSchema),
  });

  const { isDirty, isValid, errors } = formState;
  const onSubmit = async (values: TFormDel) => {
    deleteUser({ userId, username: values.username }).catch(() => {});
  };

  useEffect(() => {
    htmlElRef.current && htmlElRef.current.focus();
  }, []);
  return (
    <El.Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <El.Section>
        <PopUpHeader
          title="Delete"
          close={() => dispatch({ type: "CLOSE_POPUP" })}
        />
        <El.Body>
          <ShowMessage message={error?.message} color="danger" />
          <El.Content>
            <El.Text1>KONFIRMASI HAPUS DATA</El.Text1>
            {dataInit && (
              <El.TextWrapper>
                <El.TextGroup>
                  <h1 className="key">ID</h1>
                  <h1 className="separator">:</h1>
                  <h1 className="value">{dataInit?.id}</h1>
                </El.TextGroup>
                <El.TextGroup>
                  <h1 className="key">Name</h1>
                  <h1 className="separator">:</h1>
                  <h1 className="value">{`${dataInit?.firstName} ${
                    dataInit.lastName || ""
                  }`}</h1>
                </El.TextGroup>
                <El.TextGroup>
                  <h1 className="key">Role</h1>
                  <h1 className="separator">:</h1>
                  <h1 className="value">{dataInit?.role}</h1>
                </El.TextGroup>
              </El.TextWrapper>
            )}
            <El.Form onSubmit={handleSubmit(onSubmit)}>
              <h1 className="confirm-info">
                Ketik <h1 className="username">{dataInit?.username}</h1> untuk
                konfirmasi
              </h1>
              <FormsControl
                control="input"
                type="text"
                name="username"
                ref={htmlElRef}
                register={register}
                error={errors.username ? true : false}
                disabled={loading}
                message={errors.username ? errors.username.message : null}
              />

              <El.ButtonWrapper>
                <Button
                  type="submit"
                  name="Delete"
                  color="danger"
                  isLoading={loading}
                  disabled={!isDirty || !isValid || loading}
                />
                <Button
                  name="Cancel"
                  type="button"
                  onClick={() => dispatch({ type: "CLOSE_POPUP" })}
                />
              </El.ButtonWrapper>
            </El.Form>
          </El.Content>
        </El.Body>
      </El.Section>
    </El.Container>
  );
};

export default Delete;
