import * as yup from "yup";

export const validationSchema = yup.object({
  title: yup.string().required("Required"),
  description: yup.string().required("Required"),
  edition: yup.string().required("Required"),
  series: yup.string().required("Required"),
  releaseYear: yup
    .string()
    .required("Required")
    .matches(/^20((1[1-9])|([2-9][0-9]))$/, "minimum year 2011"),
  numberOfPages: yup
    .number()
    .required("Required")
    .typeError("Field must be number")
    .positive("Field must be positive number"),
  height: yup
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
  rating: yup
    .string()
    .required("Required")
    .typeError("Field must be number")
    .matches(/^(?:5(?:\.0)?|[1-4](?:\.[0-9])?|0?\.[1-9])$/, "Range 0.1-5"),
  published: yup.string().required("Required"),
  author: yup.string().required("Required"),
  libraryType: yup.string().required("Required"),
  typeCategory: yup.string().required("Required"),
  category: yup.array().of(yup.string()),
  cover: yup
    .mixed()
    .required("Required")
    .test("fileType", "File type not supported (only jpg/png)", (value) =>
      value[0] ? "image/jpeg image/png".includes(value[0].type) : true
    )
    .test("fileSize", "File is too large (max 2MB)", (value) =>
      value[0] ? value[0].size <= 2000000 : true
    ),
});
