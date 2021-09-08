import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { validationSchema } from "../validationScema";
import { useContext, useEffect, useRef } from "react";
import * as El from "./FormDataElement";
import { TFormUpdateBook } from "../../../../../../../../types/Forms";
import FormsControl from "../../../../../../../otherComps/Forms/FormsControl";
import Button from "../../../../../../../otherComps/Buttons/Button";
import { AdminContext } from "../../../../../../../../contexts/AdminNavCtx";
import {
  useGQLUpdateBook,
  useGQLGetFormBook,
  useGQLGetFormInit,
} from "../../../useGQLBook";
import FormMessage from "../../../../../../../otherComps/ShowMessage";

const FormData = ({ bookId }) => {
  const {
    register,
    handleSubmit,
    formState,
    setError,
    setValue,
    clearErrors,
    reset,
  } = useForm<TFormUpdateBook>({
    mode: "all",
    reValidateMode: "onChange",
    defaultValues: {},
    shouldFocusError: true,
    resolver: yupResolver(validationSchema),
  });

  const { isDirty, isValid, errors } = formState;
  const { dispatch } = useContext(AdminContext);

  const { updateBook, data, error, loading } = useGQLUpdateBook();
  const { dataGFI, errorGFI, loadGFI } = useGQLGetFormInit({ bookId });

  const { dataForm, errorForm, loadForm } = useGQLGetFormBook();
  const onSubmit = async (values: TFormUpdateBook) => {
    updateBook({ bookId, ...values })
      .then(({ data }) => {
        dispatch({
          type: "SHOW_POPUP",
          value: { name: "bookDetail", value: data.updateBook.id },
        });
      })
      .catch(() => {});
  };

  useEffect(() => {
    if (dataGFI && dataForm) {
      setValue("title", dataGFI.title);
      setValue("author", dataGFI.Author.id);
      setValue("synopsis", dataGFI.synopsis);
      setValue("edition", dataGFI.edition);
      setValue("series", dataGFI.series);
      setValue("numberOfPages", dataGFI.numberOfPages);
      setValue("height", dataGFI.height);
      setValue("weight", dataGFI.weight);
      setValue("releaseYear", dataGFI.releaseYear);
      setValue("stock", dataGFI.stock);
      setValue("price", dataGFI.price);
      setValue("rating", dataGFI.rating);
      setValue(
        "published",
        dataGFI.Category.find((val) => val.group === "Published")?.id
      );
      setValue(
        "libraryType",
        dataGFI.Category.find((val) => val.group === "LibraryType")?.id
      );
      setValue(
        "readerGroup",
        dataGFI.Category.find((val) => val.group === "ReaderGroup")?.id
      );
      setValue(
        "typeCategory",
        dataGFI.Category.find((val) => val.group === "TypeCategory")?.id
      );
      setValue(
        "category[]",
        dataGFI.Category.reduce(
          (acc, curr) => (curr.group === "Other" ? [curr.id, ...acc] : acc),
          []
        )
      );
    }
  }, [dataGFI, dataForm]);
  return (
    <El.Main>
      <FormMessage message={error?.message} color="danger" />
      <El.Form onSubmit={handleSubmit(onSubmit)}>
        <El.FormInput>
          <El.InputGroup>
            <FormsControl
              control="input"
              type="text"
              name="title"
              register={register}
              label="Judul"
              error={errors.title ? true : false}
              disabled={loading || loadGFI}
              isLoading={loadGFI}
              message={errors.title ? errors.title.message : null}
            />
            <FormsControl
              control="select"
              name="author"
              register={register}
              label="Kepengarangan"
              options={dataForm?.authors.map((author) => ({
                id: author.id,
                value: author.name,
              }))}
              error={errors.author ? true : false}
              disabled={loading || loadGFI}
              isLoading={loadForm || loadGFI}
              message={errors.author ? "Required" : null}
              clearError={clearErrors}
            />
            <FormsControl
              control="textarea"
              name="synopsis"
              register={register}
              label="Sinopsis / subject"
              error={errors.synopsis ? true : false}
              disabled={loading || loadGFI}
              isLoading={loadGFI}
              message={errors.synopsis ? errors.synopsis.message : null}
            />
            <El.SpanGroup>
              <FormsControl
                control="input"
                type="text"
                name="edition"
                register={register}
                label="Edisi"
                error={errors.edition ? true : false}
                disabled={loading || loadGFI}
                isLoading={loadGFI}
                message={errors.edition ? errors.edition.message : null}
              />
              <FormsControl
                control="input"
                type="text"
                name="series"
                register={register}
                label="Seri"
                error={errors.series ? true : false}
                disabled={loading || loadGFI}
                isLoading={loadGFI}
                message={errors.series ? errors.series.message : null}
              />
            </El.SpanGroup>
          </El.InputGroup>
          <El.InputGroup>
            <El.SpanGroup>
              <FormsControl
                control="input"
                type="number"
                name="numberOfPages"
                register={register}
                label="Jumlah Halaman"
                error={errors.numberOfPages ? true : false}
                disabled={loading || loadGFI}
                isLoading={loadGFI}
                message={
                  errors.numberOfPages ? errors.numberOfPages.message : null
                }
              />
              <FormsControl
                control="input"
                type="number"
                name="height"
                register={register}
                label="Tinggi Buku"
                error={errors.height ? true : false}
                disabled={loading || loadGFI}
                isLoading={loadGFI}
                message={errors.height ? errors.height.message : null}
              />
              <FormsControl
                control="input"
                type="number"
                name="weight"
                register={register}
                label="Berat Buku"
                error={errors.weight ? true : false}
                disabled={loading || loadGFI}
                isLoading={loadGFI}
                message={errors.weight ? errors.weight.message : null}
              />
            </El.SpanGroup>
            <El.SpanGroupGrid2>
              <FormsControl
                control="select"
                name="published"
                register={register}
                label="Terbitan"
                options={
                  !dataForm
                    ? null
                    : dataForm.categories
                        .filter((category) => category.group === "Published")
                        .map((category) => ({
                          id: category.id,
                          value: category.name,
                        }))
                }
                error={errors.published ? true : false}
                disabled={loading || loadGFI}
                isLoading={loadForm || loadGFI}
                message={errors.published ? "Required" : null}
                clearError={clearErrors}
              />
              <FormsControl
                control="input"
                type="number"
                name="releaseYear"
                register={register}
                label="Tahun Terbit"
                error={errors.releaseYear ? true : false}
                disabled={loading || loadGFI}
                isLoading={loadGFI}
                message={errors.releaseYear ? errors.releaseYear.message : null}
              />
            </El.SpanGroupGrid2>
            <El.SpanGroup>
              <FormsControl
                control="select"
                name="libraryType"
                register={register}
                label="Jenis Pustaka"
                options={
                  !dataForm
                    ? null
                    : dataForm.categories
                        .filter((category) => category.group === "LibraryType")
                        .map((category) => ({
                          id: category.id,
                          value: category.name,
                        }))
                }
                error={errors.libraryType ? true : false}
                disabled={loading || loadGFI}
                isLoading={loadForm || loadGFI}
                message={errors.libraryType ? "Required" : null}
                clearError={clearErrors}
              />
              <FormsControl
                control="select"
                name="typeCategory"
                register={register}
                label="Kategori Jenis"
                options={
                  !dataForm
                    ? null
                    : dataForm.categories
                        .filter((category) => category.group === "TypeCategory")
                        .map((category) => ({
                          id: category.id,
                          value: category.name,
                        }))
                }
                error={errors.typeCategory ? true : false}
                disabled={loading || loadGFI}
                isLoading={loadGFI}
                message={errors.typeCategory ? "Required" : null}
                clearError={clearErrors}
              />
            </El.SpanGroup>
            <El.SpanGroupGrid3>
              <FormsControl
                control="input"
                type="number"
                name="stock"
                register={register}
                label="Stok"
                error={errors.stock ? true : false}
                disabled={loading || loadGFI}
                isLoading={loadGFI}
                message={errors.stock ? errors.stock.message : null}
              />
              <FormsControl
                control="input"
                type="money"
                name="price"
                register={register}
                label="Harga"
                error={errors.price ? true : false}
                disabled={loading || loadGFI}
                isLoading={loadGFI}
                message={errors.price ? errors.price.message : null}
              />
              <FormsControl
                control="input"
                type="number"
                name="rating"
                register={register}
                label="Rating"
                step=".01"
                error={errors.rating ? true : false}
                disabled={loading || loadGFI}
                isLoading={loadGFI}
                message={errors.rating ? errors.rating.message : null}
              />
            </El.SpanGroupGrid3>
            <FormsControl
              control="selectMultiple"
              name="category"
              register={register}
              label="Kategori Lainnya (opsi)"
              options={
                !dataForm
                  ? null
                  : dataForm.categories
                      .filter((category) => category.group === "Other")
                      .map((category) => ({
                        id: category.id,
                        value: category.name,
                      }))
              }
              error={errors.category ? true : false}
              disabled={loading || loadGFI}
              isLoading={loadForm || loadGFI}
              message={errors.category ? "Required" : null}
              clearError={clearErrors}
            />
          </El.InputGroup>
        </El.FormInput>
        <El.SubmitWrapper>
          <Button
            type="submit"
            name="Save"
            color="success"
            isLoading={loading}
            disabled={loading || loadGFI}
          />
          <Button
            name="Cancel"
            type="button"
            disabled={loading || loadGFI}
            onClick={() => dispatch({ type: "CLOSE_POPUP" })}
          />
        </El.SubmitWrapper>
      </El.Form>
    </El.Main>
  );
};

export default FormData;
