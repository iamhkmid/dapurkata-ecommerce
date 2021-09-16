import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { validationSchema } from "./validationScema";
import { useContext, useEffect, useRef } from "react";
import * as El from "./CreateElement";
import { TFormCreateBook } from "../../../../../../types/Forms";
import FormsControl from "../../../../../otherComps/Forms/FormsControl";
import Button from "../../../../../otherComps/Buttons/Button";
import { AdminContext } from "../../../../../../contexts/AdminNavCtx";
import { useGQLCreateBook, useGQLGetFormBook } from "../useGQLBook";
import ShowMessage from "../../../../../otherComps/ShowMessage";

const Create = () => {
  const {
    register,
    handleSubmit,
    formState,
    setError,
    setValue,
    clearErrors,
    reset,
  } = useForm<TFormCreateBook>({
    mode: "all",
    reValidateMode: "onChange",
    defaultValues: {},
    shouldFocusError: true,
    resolver: yupResolver(validationSchema),
  });

  const { isDirty, isValid, errors } = formState;
  const { dispatch } = useContext(AdminContext);

  const { createBook, data, error, loading } = useGQLCreateBook();

  const { dataForm, errorForm, loadForm } = useGQLGetFormBook();
  const onSubmit = async (values: TFormCreateBook) => {
    createBook(values).then(({ data }) => {
      reset();
      dispatch({
        type: "SHOW_POPUP",
        value: { name: "bookDetail", value: data.createBook.id },
      });
    });
  };

  return (
    <El.Main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <ShowMessage message={error?.message} color="danger" />
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
              disabled={loading}
              message={errors.title ? errors.title.message : null}
            />
            <FormsControl
              control="select"
              name="author"
              register={register}
              label="Kepengarangan"
              options={
                !dataForm
                  ? null
                  : dataForm.authors.map((author) => ({
                      id: author.id,
                      value: author.name,
                    }))
              }
              error={errors.author ? true : false}
              disabled={loading}
              isLoading={loadForm}
              message={errors.author ? "Required" : null}
              clearError={clearErrors}
            />
            <FormsControl
              control="textarea"
              name="description"
              register={register}
              label="Sinopsis / subject"
              error={errors.description ? true : false}
              disabled={loading}
              message={errors.description ? errors.description.message : null}
            />
            <El.SpanGroup>
              <FormsControl
                control="input"
                type="text"
                name="edition"
                register={register}
                label="Edisi"
                error={errors.edition ? true : false}
                disabled={loading}
                message={errors.edition ? errors.edition.message : null}
              />
              <FormsControl
                control="input"
                type="text"
                name="series"
                register={register}
                label="Seri"
                error={errors.series ? true : false}
                disabled={loading}
                message={errors.series ? errors.series.message : null}
              />
            </El.SpanGroup>
            <El.SpanGroup>
              <FormsControl
                control="input"
                type="number"
                name="numberOfPages"
                register={register}
                label="Jumlah Halaman"
                error={errors.numberOfPages ? true : false}
                disabled={loading}
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
                disabled={loading}
                message={errors.height ? errors.height.message : null}
              />
              <FormsControl
                control="input"
                type="number"
                name="weight"
                register={register}
                label="Berat Buku"
                error={errors.weight ? true : false}
                disabled={loading}
                message={errors.weight ? errors.weight.message : null}
              />
            </El.SpanGroup>
          </El.InputGroup>
          <El.InputGroup>
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
                disabled={loading}
                isLoading={loadForm}
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
                disabled={loading}
                message={errors.releaseYear ? errors.releaseYear.message : null}
              />
            </El.SpanGroupGrid2>{" "}
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
                disabled={loading}
                isLoading={loadForm}
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
                disabled={loading}
                isLoading={loadForm}
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
                disabled={loading}
                message={errors.stock ? errors.stock.message : null}
              />
              <FormsControl
                control="input"
                type="money"
                name="price"
                register={register}
                label="Harga"
                error={errors.price ? true : false}
                disabled={loading}
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
                disabled={loading}
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
              disabled={loading}
              isLoading={loadForm}
              message={errors.category ? "Required" : null}
              clearError={clearErrors}
            />
            <FormsControl
              control="file"
              name="cover"
              register={register}
              label="Cover (opsi)"
              error={errors.cover ? true : false}
              disabled={loading}
              message={errors.cover ? errors.cover.message : null}
            />
          </El.InputGroup>
        </El.FormInput>
        <El.SubmitWrapper>
          <Button
            type="submit"
            name="Save"
            isLoading={loading}
            disabled={loading}
          />
        </El.SubmitWrapper>
      </El.Form>
    </El.Main>
  );
};

export default Create;
