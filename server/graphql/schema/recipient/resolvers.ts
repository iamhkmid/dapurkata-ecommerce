import { TRecipientMutation, TRecipientQuery } from "../../../types/graphql";
import { validateUser } from "../../utils/validateUser";

export const Query: TRecipientQuery = {
  recipient: async (_, { recipientId }, { db }) =>
    await db.recipient.findUnique({ where: { id: recipientId } }),
  recipients: async (_, { userId }, { db }) => {
    const user = await db.user.findUnique({
      where: { id: userId },
      select: { Recipient: true },
    });
    return user.Recipient;
  },
};

export const Mutation: TRecipientMutation = {
  createRecipient: async (_, { data }, { api, user, db }) => {
    const { cityId, address, firstName, lastName, phone, userId, email } = data;
    validateUser({
      targetRole: "USER",
      currRole: user.role,
      targetId: userId,
      currId: user.id,
    });
    const resApi = await api.rajaOngkir.getCity({
      city_id: cityId,
    });
    return await db.recipient.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        provinceId: resApi.province_id,
        provinceName: resApi.province,
        cityId: resApi.city_id,
        cityName: resApi.city_name,
        postalCode: resApi.postal_code,
        address,
        User: { connect: { id: userId } },
      },
    });
  },
  updateRecipient: async (_, { data }, { api, user, db }) => {
    const { cityId, address, firstName, lastName, phone, recipientId, email } =
      data;
    const findRcpt = await db.recipient.findUnique({
      where: { id: recipientId },
    });
    validateUser({
      targetRole: "USER",
      currRole: user.role,
      targetId: findRcpt?.userId,
      currId: user.id,
    });
    const resApi = await api.rajaOngkir.getCity({
      city_id: cityId,
    });
    return await db.recipient.update({
      where: { id: recipientId },
      data: {
        firstName,
        lastName,
        email,
        phone,
        provinceId: resApi.province_id,
        provinceName: resApi.province,
        cityId: resApi.city_id,
        cityName: resApi.city_name,
        postalCode: resApi.postal_code,
        address,
      },
    });
  },
  deleteRecipient: async (_, { recipientId }, { user, db }) => {
    const findRcpt = await db.recipient.findUnique({
      where: { id: recipientId },
    });
    validateUser({
      targetRole: "USER",
      currRole: user.role,
      targetId: findRcpt?.userId,
      currId: user.id,
    });
    return await db.recipient.delete({ where: { id: recipientId } });
  },
};
