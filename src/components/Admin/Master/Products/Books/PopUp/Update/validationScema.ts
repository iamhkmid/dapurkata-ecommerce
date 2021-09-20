import * as yup from "yup";

export const customValidation = (
  authErrors: { messages: string },
  setError
) => {
  if (authErrors) {
    authErrors.messages.includes("username") && setError("username", {});
    authErrors.messages.includes("email") && setError("email", {});
    authErrors.messages.includes("phone number") && setError("phoneNumber", {});
  }
};

export const validationSchema = yup.object({
  title: yup.string().required("Required"),
  description: yup.string().required("Required"),
  edition: yup
    .string()
    .required("Required")
    .test("len", "Must be less than 10 characters", (val) => val.length < 10),
  series: yup
    .string()
    .required("Required")
    .test(
      "len",
      "Must be number and less than 1000",
      (val) => Number(val) < 1000
    ),
  releaseYear: yup
    .string()
    .required("Required")
    .matches(/^20((1[1-9])|([2-9][0-9]))$/, "minimum year 2011"),
  numberOfPages: yup
    .number()
    .required("Required")
    .typeError("Field must be number")
    .positive("Field must be positive number"),
  lenght: yup
    .number()
    .required("Required")
    .typeError("Field must be number")
    .positive("Field must be positive number"),
  width: yup
    .number()
    .required("Required")
    .typeError("Field must be number")
    .positive("Field must be positive number"),
  weight: yup
    .number()
    .required("Required")
    .typeError("Field must be number")
    .positive("Field must be positive number"),
  stock: yup.number().typeError("Field must be number").required("Required"),
  price: yup
    .number()
    .required("Required")
    .typeError("Field must be number")
    .positive("Field must be positive number"),
  language: yup.string().required("Required"),
  isbn: yup.string().required("Required"),
  authorId: yup.string().required("Required"),
  publisherId: yup.string().required("Required"),
  libraryType: yup.string().required("Required"),
  readerGroup: yup.string().required("Required"),
  category: yup.array().of(yup.string()),
});
