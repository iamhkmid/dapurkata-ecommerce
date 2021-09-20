import { prisma } from "../seed";
import bcrypt from "bcrypt";

export const user = async () => {
  const salt = await bcrypt.genSalt();
  let password1 = await bcrypt.hash("Jalawiyata2!", salt);
  let password2 = await bcrypt.hash("Jalawiyata2!", salt);

  const user1 = await prisma.user.create({
    data: {
      username: "iamhkmid",
      email: "iamhkmid@gmail.com",
      firstName: "Muhammad Luqmanul",
      lastName: "Hakim",
      password: password1,
      role: "ADMIN",
      phone: "089633189921",
      pictureDir: "/uploads/profile/seed/",
      userPicture: "/uploads/profile/seed/img.jpg",
    },
  });
  const user2 = await prisma.user.create({
    data: {
      username: "naufal",
      firstName: "Naufal",
      lastName: "Fakhri",
      email: "naufal@gmail.com",
      password: password2,
      role: "USER",
      phone: "089633189922",
      Recipient: {
        create: [
          {
            firstName: "Naufal",
            lastName: "Fakhri",
            email: "naufal12345@gmail.com",
            phone: "0853687799132",
            provinceId: "2",
            provinceName: "Bangka Belitung",
            cityId: "334",
            cityName: "Pangkal Pinang",
            address:
              "Batin Tikal, Kec. Taman Sari, Kota Pangkal Pinang, Kepulauan Bangka Belitung 33684",
            postalCode: "33684",
          },
          {
            firstName: "Muhammad Luqmanul",
            lastName: "Hakim",
            email: "luqman12345@gmail.com",
            phone: "089633189921",
            provinceId: "18",
            provinceName: "Lampung",
            cityId: "227",
            cityName: "Lampung Utara",
            address:
              "Jl.Madukoro Baru No.321 Kec. Kotabumi Utara, Kab. Lampung Utara, Prov. Lampung",
            postalCode: "34516",
          },
        ],
      },
      pictureDir: "/uploads/profile/seed/",
      userPicture: "/uploads/profile/seed/img.jpg",
    },
  });

  console.log({
    user1,
    user2,
  });
};
