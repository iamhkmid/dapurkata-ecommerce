import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useWindowSize } from "react-use";
import { UserNavCtx } from "../../../../../contexts/UserNavCtx";
import { TFormMyAccount } from "../../../../../types/user";
import Button from "../../../../otherComps/Buttons/Button";
import FormsControl from "../../../../otherComps/Forms/FormsControl";
import ShowMessage from "../../../../otherComps/ShowMessage";
import * as El from "./MyAccountElement";
import { useGQLInitData } from "./useGQL";
import { validationSchema } from "./validationScema";

const MyAccount = () => {
  const { dispatch: dispatchUserNav } = useContext(UserNavCtx);
  const defUserPic = `/uploads/profile/default/defProfilePic.svg`;
  const [userPic, setUserPic] = useState(defUserPic);
  const [imgSize, setImgSize] = useState(80);
  const defaultImgSrc = () => {
    setUserPic(defUserPic);
  };

  const {
    data: dataInit,
    loading: loadInit,
    error: errorInit,
  } = useGQLInitData();
  const { register, handleSubmit, formState, setError, setValue } =
    useForm<TFormMyAccount>({
      mode: "all",
      reValidateMode: "onChange",
      defaultValues: {},
      shouldFocusError: true,
      resolver: yupResolver(validationSchema),
    });
  const { isDirty, isValid, errors } = formState;
  const onSubmit = async (values: TFormMyAccount) => {};

  useEffect(() => {
    if (dataInit) {
      setValue("firstName", dataInit.firstName);
      setValue("lastName", dataInit.lastName);
      setValue("username", dataInit.username);
      setValue("email", dataInit.email);
      setValue("phone", dataInit.phone);
      if (dataInit.UserPicture?.url) setUserPic(dataInit.UserPicture.url);
    }
  }, [dataInit]);

  const { width } = useWindowSize();
  useEffect(() => {
    width > 540 && setImgSize(80);
    width <= 540 && setImgSize(70);
  }, [width]);

  return (
    <El.Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <El.Head>
        <El.PhotoWrapper>
          <Image
            src={`${process.env.NEXT_PUBLIC_GQL_HTTP_URL}${userPic}`}
            alt="Profile Pic"
            layout="fixed"
            quality={75}
            height={imgSize}
            width={imgSize}
            onError={() => defaultImgSrc()}
          />
        </El.PhotoWrapper>
        <El.ButtonWrapper>
          <Button type="button" name="upload" color="section" />
          <Button type="button" name="Hapus" color="danger" />
        </El.ButtonWrapper>
      </El.Head>
      <El.FormWrapper>
        <ShowMessage message={null} color="danger" />
        <El.Form onSubmit={handleSubmit(onSubmit)}>
          <El.InputGroup2>
            <FormsControl
              control="input"
              type="text"
              name="firstName"
              register={register}
              label="Nama Depan"
              error={errors.firstName ? true : false}
              isLoading={loadInit}
              message={errors.firstName ? errors.firstName.message : null}
            />
            <FormsControl
              control="input"
              type="text"
              name="lastName"
              register={register}
              label="Nama Belakang"
              error={errors.lastName ? true : false}
              isLoading={loadInit}
              message={errors.lastName ? errors.lastName.message : null}
            />
          </El.InputGroup2>
          <El.InputGroup3>
            <FormsControl
              control="input"
              type="number"
              name="phone"
              register={register}
              label="Phone"
              error={errors.phone ? true : false}
              isLoading={loadInit}
              message={errors.phone ? errors.phone.message : null}
            />
            <FormsControl
              control="input"
              type="text"
              name="username"
              register={register}
              label="Username"
              error={errors.username ? true : false}
              isLoading={loadInit}
              message={errors.username ? errors.username.message : null}
            />
            <FormsControl
              control="input"
              type="email"
              name="email"
              register={register}
              label="Email"
              error={errors.email ? true : false}
              isLoading={loadInit}
              message={errors.email ? errors.email.message : null}
            />
          </El.InputGroup3>
          <El.ButtonLink
            onClick={() =>
              dispatchUserNav({
                type: "SHOW_POPUP",
                value: { name: "CHANGE_PASSWORD" },
              })
            }
          >
            Ubah password
          </El.ButtonLink>
          <El.SubmitWrapper>
            <Button type="submit" name="Simpan" isLoading={loadInit} />
          </El.SubmitWrapper>
        </El.Form>
      </El.FormWrapper>
    </El.Main>
  );
};

export default MyAccount;
