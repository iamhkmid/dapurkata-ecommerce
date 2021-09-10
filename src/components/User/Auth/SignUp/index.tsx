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

  return null;
};
export default SignUp;
