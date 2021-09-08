import * as yup from "yup";

export const customValidation = (
  authErrors: { messages: string },
  setError
) => {
  if (authErrors) {
    authErrors.messages.toLowerCase().includes("username") &&
      setError("username", {});
    authErrors.messages.toLowerCase().includes("password") &&
      setError("password", {});
  }
};
export const validationSchema = yup.object({
  username: yup
    .string()
    .required("Required")
    .matches(
      /^[a-zA-Z]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/,
      "Minimum 5 characters, start with Alphabet"
    ),
  password: yup
    .string()
    .required("Required")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/,
      "Minimum 8 characters at least 1 Alphabet, 1 Number and 1 Special Character"
    ),
  rememberMe: yup.boolean().notRequired().default(false),
});
