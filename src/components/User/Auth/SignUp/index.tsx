import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { customValidation, validationSchema } from "./validationScema";
import { useEffect, useRef } from "react";
import { TFormCreateUser } from "../../../../types/user";
import FormsControl from "../../../otherComps/Forms/FormsControl";
import Button from "../../../otherComps/Buttons/Button";
import ButtonLink from "../../../otherComps/Buttons/ButtonLink";
import ThemeContextProvider from "../../../../contexts/ThemeCtx";
import LoadingWrapper from "../../../otherComps/Loading/LoadingWrapper";
import * as El from "./SignUpElement";
import { DateSingleInput } from "@datepicker-react/styled";
import Router from "next/router";
import ShowMessage from "../../../otherComps/ShowMessage";
import { useGQLCreateUser } from "./useGQL";

const SignUp = () => {
  const htmlElRef = useRef(null);
  const setFocus = () => {
    htmlElRef.current && htmlElRef.current.focus();
  };
  const { register, handleSubmit, formState, setError } =
    useForm<TFormCreateUser>({
      mode: "all",
      reValidateMode: "onChange",
      defaultValues: {},
      shouldFocusError: true,
      resolver: yupResolver(validationSchema),
    });

  const { isDirty, isValid, errors } = formState;
  const { createUser, data, error, loading } = useGQLCreateUser();
  const onSubmit = async (values: TFormCreateUser) => {
    createUser(values)
      .then(() => Router.replace("/auth/signin"))
      .catch(() => {});
  };

  useEffect(() => {
    setFocus();
  }, []);

  return (
    <El.Main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <El.Container initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {loading && <LoadingWrapper />}
        <El.CompTittle>Sign up</El.CompTittle>
        <ShowMessage message={error?.message} color="danger" />
        <El.Form onSubmit={handleSubmit(onSubmit)}>
          <El.FormWrapper>
            <El.InputGroup>
              <FormsControl
                control="input"
                type="text"
                name="firstName"
                ref={htmlElRef}
                register={register}
                label="Nama Depam"
                error={errors.firstName ? true : false}
                disabled={loading}
                message={errors.firstName ? errors.firstName.message : null}
              />
              <FormsControl
                control="input"
                type="text"
                name="lastName"
                ref={htmlElRef}
                register={register}
                label="Nama Belakang"
                error={errors.lastName ? true : false}
                disabled={loading}
                message={errors.lastName ? errors.lastName.message : null}
              />
              <FormsControl
                control="input"
                type="text"
                name="username"
                register={register}
                label="Username"
                error={errors.username ? true : false}
                disabled={loading}
                message={errors.username ? errors.username.message : null}
              />
              <FormsControl
                control="input"
                type="email"
                name="email"
                register={register}
                label="Email"
                error={errors.email ? true : false}
                disabled={loading}
                message={errors.email ? errors.email.message : null}
              />
              <FormsControl
                control="input"
                type="password"
                name="password"
                register={register}
                label="Password"
                error={errors.password ? true : false}
                disabled={loading}
                message={errors.password ? errors.password.message : null}
              />
              <FormsControl
                control="input"
                type="password"
                name="confirmPassword"
                register={register}
                label="Konfirmasi Password"
                error={errors.confirmPassword ? true : false}
                disabled={loading}
                message={
                  errors.confirmPassword ? errors.confirmPassword.message : null
                }
              />
            </El.InputGroup>
            <El.InputGroup>
              <FormsControl
                control="input"
                type="phoneNumber"
                name="phoneNumber"
                register={register}
                label="Nomer HP"
                error={errors.phoneNumber ? true : false}
                disabled={loading}
                message={errors.phoneNumber ? errors.phoneNumber.message : null}
              />
              <FormsControl
                control="file"
                name="userPic"
                register={register}
                ref={htmlElRef[5]}
                label="Foto Profil"
                error={errors.userPic ? true : false}
                disabled={loading}
                message={errors.userPic ? errors.userPic.message : null}
              />
            </El.InputGroup>
          </El.FormWrapper>
          <El.SubmitWrapper>
            <Button
              type="submit"
              name="Sign up"
              isLoading={loading}
              disabled={!isDirty || !isValid || loading}
            />
            <ButtonLink name="Just sign in" link="/auth/signin" />
          </El.SubmitWrapper>
        </El.Form>
      </El.Container>
    </El.Main>
  );
};
export default SignUp;
