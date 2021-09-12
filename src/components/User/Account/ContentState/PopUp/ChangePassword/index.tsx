import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { UserNavCtx } from "../../../../../../contexts/UserNavCtx";
import Button from "../../../../../otherComps/Buttons/Button";
import FormsControl from "../../../../../otherComps/Forms/FormsControl";
import PopUpHeader from "../../../../../otherComps/PopUpHeader";
import * as El from "./ChangePasswordElement";
import { validationSchema } from "./validationScema";
import { useGQLChangePassword } from "./useGQL";
import ShowMessage from "../../../../../otherComps/ShowMessage";
import { TFormChangePass } from "../../../../../../types/user";
import { useLogOut } from "../../../../../../hooks/useGQLAuth";

const ChangePassword = () => {
  const { dispatch: dispatchUserNav } = useContext(UserNavCtx);
  const htmlElRef = useRef<{ focus: () => void }>();
  const setFocus = () => {
    htmlElRef.current && htmlElRef.current.focus();
  };

  const { register, handleSubmit, formState } = useForm<TFormChangePass>({
    mode: "all",
    reValidateMode: "onChange",
    shouldFocusError: true,
    resolver: yupResolver(validationSchema),
  });

  const { isDirty, isValid, errors } = formState;
  const { logOut } = useLogOut();
  const { data, loading, error, changePassword } = useGQLChangePassword();

  const close = () => {
    dispatchUserNav({
      type: "CLOSE_POPUP",
    });
  };

  const onSubmit = async (values: TFormChangePass) => {
    const { newPassword, oldPassword } = values;
    await changePassword({ newPassword, oldPassword });
  };

  useEffect(() => {
    setFocus();
  }, []);

  useEffect(() => {
    const checkData = async () => {
      if (data) {
        close();
        await logOut();
      }
    };
    checkData();
  }, [data]);

  return (
    <El.Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <El.Section>
        <PopUpHeader title="Ubah Password" close={() => close()} />
        <El.Body>
          <ShowMessage message={error?.message} color="danger" />
          <El.Form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <FormsControl
              control="input"
              type="password"
              name="oldPassword"
              ref={htmlElRef}
              register={register}
              label="Password Lama"
              error={errors.oldPassword ? true : false}
              disabled={loading}
              message={errors.oldPassword ? errors.oldPassword.message : null}
            />
            <FormsControl
              control="input"
              type="password"
              name="newPassword"
              register={register}
              label="Password Baru"
              error={errors.newPassword ? true : false}
              disabled={loading}
              message={errors.newPassword ? errors.newPassword.message : null}
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
            <El.SubmitWrapper>
              <Button type="submit" name="Simpan" isLoading={loading} />
            </El.SubmitWrapper>
          </El.Form>
        </El.Body>
      </El.Section>
    </El.Main>
  );
};

export default ChangePassword;
