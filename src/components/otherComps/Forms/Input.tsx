import { forwardRef, useImperativeHandle, useRef } from "react";
import { TForm, TInput } from "../../../types/TFormControl";
import IconsControl from "../../IconsControl";
import Loading2 from "../Loading/Loading2";
import * as El from "./InputElement";
import TextError from "./TextError";

type props = TInput & TForm;
const Input = forwardRef<{ focus?: () => void }, props>((props, ref) => {
  const {
    label,
    name,
    error,
    withIcon,
    message,
    type,
    register,
    isLoading,
    placeholder,
    childRef,
    ...rest
  } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
  }));
  return (
    <El.InputContainer>
      {!!label && <El.Label htmlFor={name}>{label}</El.Label>}
      <El.InputWrapper>
        <El.InputElement
          className={error && "error"}
          ref={(e) => {
            register(e);
            inputRef.current = e;
          }}
          name={name}
          type={type}
          placeholder={placeholder}
          isLoading={isLoading}
          withIcon={withIcon}
          autoComplete={name.includes("password") ? "new-password" : "off"}
          {...rest}
        />
        {withIcon && (name === "username" || name.includes("password")) && (
          <El.Logo error={error ? true : false}>{IconsControl(name)}</El.Logo>
        )}
        {isLoading && (
          <El.LoadingWrapper>
            <Loading2 />
          </El.LoadingWrapper>
        )}
      </El.InputWrapper>
      <TextError message={message} color="danger" />
    </El.InputContainer>
  );
});

export default Input;
