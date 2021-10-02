import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { validationSchema } from "./validationScema";
import { useContext, useEffect, useRef } from "react";
import { TGQLFormSignin } from "../../../../types/auth";
import FormsControl from "../../../otherComps/Forms/FormsControl";
import Button from "../../../otherComps/Buttons/Button";
import ButtonLink from "../../../otherComps/Buttons/ButtonLink";
import * as El from "./SignInElement";
import { useSignIn } from "../../../../hooks/useGQLAuth";
import { UserNavCtx } from "../../../../contexts/UserNavCtx";
const SignIn = () => {
  const { dispatch } = useContext(UserNavCtx);
  const htmlElRef = useRef<{ focus: () => void }>();
  const setFocus = () => {
    htmlElRef.current && htmlElRef.current.focus();
  };
  const { register, handleSubmit, formState, setError } =
    useForm<TGQLFormSignin>({
      mode: "all",
      reValidateMode: "onChange",
      defaultValues: {},
      shouldFocusError: true,
      resolver: yupResolver(validationSchema),
    });

  const { isDirty, isValid, errors } = formState;
  const { signIn, loading, error, data } = useSignIn();
  const onSubmit = async (values: TGQLFormSignin) => {
    await signIn(values);
  };

  useEffect(() => {
    if (error) {
      dispatch({
        type: "SHOW_GLOBAL_MESSAGE",
        value: {
          message: error.message,
          color: "danger",
        },
      });
    }
  }, [error]);
  useEffect(() => {
    htmlElRef.current.focus();
  }, []);
  return (
    <El.Main>
      <El.Container initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <El.CompTittle>Log In</El.CompTittle>
        <El.Form onSubmit={handleSubmit(onSubmit)}>
          <FormsControl
            control="input"
            type="text"
            name="username"
            ref={htmlElRef}
            register={register}
            label="Username"
            disabled={loading}
            withIcon={true}
            error={errors.username ? true : false}
            message={errors.username ? errors.username.message : null}
          />
          <FormsControl
            control="input"
            type="password"
            name="password"
            register={register}
            label="Password"
            disabled={loading}
            withIcon={true}
            error={errors.password ? true : false}
            message={errors.password ? errors.password.message : null}
          />
          <FormsControl
            control="checkbox"
            name="rememberMe"
            register={register}
            label="Ingat saya"
            error={false}
            disabled={loading}
            message={errors.rememberMe ? errors.rememberMe.message : null}
          />
          <El.SubmitWrapper>
            <Button
              type="submit"
              name="Masuk"
              disabled={!isDirty || !isValid || loading}
              isLoading={loading}
            />
            <ButtonLink name="Buat akun" link="/auth/signup" />
          </El.SubmitWrapper>
        </El.Form>
      </El.Container>
    </El.Main>
  );
};

export default SignIn;
