import { TSaveBookPic } from "../../../types/picture";
import { saveImg } from "../../utils/uploadFIle";

const addCover = async ({ cover, imgDir }) => {
  const { pathFile } = await saveImg({ imgDir, file: cover });
  return { type: "COVER", url: pathFile.split("static")[1] };
};

type TAddBookPics = {
  bookPics: any[];
  imgDir: string;
};
const addBookPics = async ({ bookPics, imgDir }: TAddBookPics) => {
  return bookPics.map(async (img, index) => {
    const { pathFile } = await saveImg({ imgDir, file: img });
    return {
      type: `OTHER${new Date().getTime()}`,
      url: pathFile.split("static")[1],
    };
  });
};

export const saveBookPic = async (options: TSaveBookPic) => {
  const { cover, bookPics, imgDir } = options;
  if (cover && bookPics) {
    const img1 = await addCover({ cover, imgDir });
    const img2 = await Promise.all(await addBookPics({ bookPics, imgDir }));
    return [img1, ...img2];
  } else if (cover) {
    return [await addCover({ cover, imgDir })];
  } else if (bookPics) {
    return await Promise.all(await addBookPics({ bookPics, imgDir }));
  } else {
    return null;
  }
};

// export const saveImgEditBook = async (options: TSaveImg) => {
//   const { image, imgDir, db } = options;
//   const currImg =
//     image && image.id
//       ? await db.Image.getImage({ where: { id: image.id } })
//       : null;
//   //save file
//   const { pathFile } = await saveFile({ imgDir, image }).catch((err) => {
//     //delete dir if error
//     removeDir(imgDir);
//     throw err;
//   });
//   //delete old file
//   const oldImgPath = path.join(process.cwd(), `public${currImg.url}`);
//   fs.access(oldImgPath, fs.constants.F_OK, (err) => {
//     if (!err)
//       fs.unlink(oldImgPath, (unlinkErr) => {
//         if (unlinkErr) throw unlinkErr;
//       });
//   });
//   return {
//     id: image.id || undefined,
//     type: image.type,
//     url: pathFile.split("public")[1],
//   };
// };
