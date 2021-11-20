import moment from "moment";
import "moment/locale/id";
import { FC } from "react";
import styled from "styled-components";
import ImageResponsive from "../../../../../otherComps/ImageResponsive";
import { useGQLUserDetail } from "../../useGQLUser";

type TProfileInfo = {
  userId: string;
};
const ProfileInfo: FC<TProfileInfo> = ({ userId }) => {
  const { data, error, loading } = useGQLUserDetail({ userId });
  return (
    <Main>
      {!loading && data && (
        <div className="profil-wrapper">
          <div className="info-wrapper">
            <PhotoWrapper>
              <ImageResponsive
                src={data?.userPicture}
                alt="Profile Pic"
                height={100}
                width={100}
                defaultIcon="person"
                quality={75}
              />
            </PhotoWrapper>
            <div className="big-info">
              <h1 className="big-fullname">{`${data.firstName} ${
                data.lastName || ""
              }`}</h1>
              <h1 className="big-role">{data.role}</h1>
            </div>
          </div>
          <div className="info-wrapper">
            <div className="text-wrapper">
              <h1 className="label">UserId</h1>
              <h1 className="value">{data.id}</h1>
            </div>
            <div className="text-wrapper">
              <h1 className="label">Nama Depan</h1>
              <h1 className="value">{data.firstName}</h1>
            </div>
            <div className="text-wrapper">
              <h1 className="label">Nama Belakang</h1>
              <h1 className="value">{data.lastName}</h1>
            </div>
            <div className="text-wrapper">
              <h1 className="label">Username</h1>
              <h1 className="value">{data.username}</h1>
            </div>
            <div className="text-wrapper">
              <h1 className="label">Email</h1>
              <h1 className="value">{data.email}</h1>
            </div>
            <div className="text-wrapper">
              <h1 className="label">No Handphone</h1>
              <h1 className="value">{data.phone}</h1>
            </div>
            <div className="text-wrapper">
              <h1 className="label">Role</h1>
              <h1 className="role">{data.role}</h1>
            </div>
            <div className="text-wrapper">
              <h1 className="label">CreateAt</h1>
              <h1 className="value">
                {moment(data.createdAt)
                  .locale("id")
                  .format("dddd, DD MMMM YYYY | HH:mm")}
              </h1>
            </div>
            <div className="text-wrapper">
              <h1 className="label">UpdatedAt</h1>
              <h1 className="value">
                {moment(data.updatedAt)
                  .locale("id")
                  .format("dddd, DD MMMM YYYY | HH:mm")}
              </h1>
            </div>
          </div>
        </div>
      )}
    </Main>
  );
};

export default ProfileInfo;

const Main = styled.div`
  display: flex;
  gap: 16px;
  max-height: 500px;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.scrollbar.v1.thumb};
    border-radius: ${({ theme }) => theme.input.borderRadius};
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.scrollbar.v1.hover.thumb};
  }
  .big-info {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .big-fullname {
    font-size: 20px;
    line-height: 1;
    font-weight: 600;
    color: ${({ theme }) => theme.color[2]};
  }
  .big-role {
    line-height: 1;
    font-size: 25px;
    font-weight: 600;
    color: ${({ theme }) => theme.color[8]};
  }
  .profil-wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
  }
  .info-wrapper {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 16px;
    width: 100%;
  }
  .text-wrapper {
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
    padding-bottom: 5px;
    border-bottom: 1px solid ${({ theme }) => theme.input.border};
  }
  .label {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    line-height: 1;
    font-family: "Poppins", sans-serif;
    font-size: 12px;
    font-weight: 600;
    color: ${({ theme }) => theme.color[2]};

    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 10px;
    }
  }
  .value {
    overflow: hidden;
    font-family: "Poppins", sans-serif;
    line-height: 1;
    font-size: 14px;
    width: max-content;
    font-weight: 400;
    color: ${({ theme }) => theme.color[1]};

    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 12px;
    }
  }
  .role {
    overflow: hidden;
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    line-height: 1;
    font-weight: 600;
    color: ${({ theme }) => theme.color[8]};

    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 14px;
    }
  }
`;
export const PhotoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius};
  height: 100px;
  width: 100px;
  min-height: 100px;
  min-width: 100px;
  aspect-ratio: 1/1;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.button.primary.background};
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    width: 90px;
    height: 90px;
    min-height: 90px;
    min-width: 90px;
  }
`;
