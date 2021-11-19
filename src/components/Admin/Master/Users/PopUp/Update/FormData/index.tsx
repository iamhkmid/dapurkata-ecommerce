import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { validationSchema } from "../validationScema";
import { useContext, useEffect, useRef } from "react";
import * as El from "./FormDataElement";
import FormsControl from "../../../../../../otherComps/Forms/FormsControl";
import Button from "../../../../../../otherComps/Buttons/Button";
import { AdminNavCtx } from "../../../../../../../contexts/AdminNavCtx";
import { useGQLInitData, useGQLUpdateUser } from "../../../useGQLUser";
import FormMessage from "../../../../../../otherComps/ShowMessage";
import { TFormUpdateUser } from "../../../../../../../types/user";

const FormData = ({ userId }) => {
  const {
    register,
    handleSubmit,
    formState,
    setError,
    setValue,
    clearErrors,
    reset,
  } = useForm<TFormUpdateUser>({
    mode: "all",
    reValidateMode: "onChange",
    defaultValues: {},
    shouldFocusError: true,
    resolver: yupResolver(validationSchema),
  });

  const { isDirty, isValid, errors } = formState;
  const { dispatch } = useContext(AdminNavCtx);

  const {
    updateUser,
    data: dataUpdate,
    error: errorUpdate,
    loading: loadingUpdate,
  } = useGQLUpdateUser();
  const {
    data: dataInit,
    loading: loadingInit,
    error: errorInit,
  } = useGQLInitData({ userId });

  const onSubmit = async (values: TFormUpdateUser) => {
    updateUser({ userId, ...values }).catch(() => {});
  };

  useEffect(() => {
    if (dataInit) {
      setValue("firstName", dataInit.firstName);
      setValue("lastName", dataInit.lastName);
      setValue("email", dataInit.email);
      setValue("username", dataInit.username);
      setValue("phone", dataInit.phone);
    }
  }, [dataInit]);
  return (
    <El.Main>
      <FormMessage message={errorUpdate?.message} color="danger" />
      <El.Form onSubmit={handleSubmit(onSubmit)}>
        <El.FormInput>
          <El.InputGroup>
            <FormsControl
              control="input"
              type="text"
              name="username"
              register={register}
              label="Username"
              error={errors.username ? true : false}
              disabled={loadingUpdate}
              isLoading={loadingInit}
              message={errors.username ? errors.username.message : null}
            />
            <FormsControl
              control="input"
              type="text"
              name="firstName"
              register={register}
              label="Nama Depan"
              error={errors.firstName ? true : false}
              disabled={loadingUpdate}
              isLoading={loadingInit}
              message={errors.firstName ? errors.firstName.message : null}
            />
            <FormsControl
              control="input"
              type="text"
              name="lastName"
              register={register}
              label="Nama Belakang"
              error={errors.lastName ? true : false}
              disabled={loadingUpdate}
              isLoading={loadingInit}
              message={errors.lastName ? errors.lastName.message : null}
            />
          </El.InputGroup>
          <El.InputGroup>
            <FormsControl
              control="input"
              type="text"
              name="email"
              register={register}
              label="Email"
              error={errors.email ? true : false}
              disabled={loadingUpdate}
              isLoading={loadingInit}
              message={errors.email ? errors.email.message : null}
            />
            <FormsControl
              control="input"
              type="text"
              name="phone"
              register={register}
              label="Email"
              error={errors.phone ? true : false}
              disabled={loadingUpdate}
              isLoading={loadingInit}
              message={errors.phone ? errors.phone.message : null}
            />
          </El.InputGroup>
        </El.FormInput>
        <El.SubmitWrapper>
          <Button
            type="submit"
            name="Simpan"
            color="success"
            isLoading={loadingUpdate}
            disabled={loadingInit}
          />
          <Button
            name="Batalkan"
            type="button"
            disabled={loadingInit}
            onClick={() => dispatch({ type: "CLOSE_POPUP" })}
          />
        </El.SubmitWrapper>
      </El.Form>
    </El.Main>
  );
};

export default FormData;
