import fs, { ReadStream } from "fs";
import path from "path";
import util from "util";

export const makeDirFile = async ({ dirLoc }) => {
  const fsMkdir = util.promisify(fs.mkdir);
  const folderName = changeStr(`${new Date().getTime()}`);
  const imgDir = `${dirLoc}/${folderName}/`;
  const dir = path.join(process.cwd(), imgDir);
  if (!fs.existsSync(dir))
    await fsMkdir(dir, { recursive: true }).catch((err) => {
      throw new Error("Failed make directory");
    });
  return { imgDir };
};

export const removeDir = async (imgDir) => {
  const fsRmdir = util.promisify(fs.rm);
  const dir = path.join(process.cwd(), imgDir);
  if (fs.existsSync(dir)) await fsRmdir(dir, { recursive: true });
};

export const changeStr = (str: string) =>
  str.replace(/([^a-z0-9 ]+)/gi, "_").replace(/\s/g, "_");

export const saveImg = async ({ file, imgDir }) => {
  const { filename, mimetype, encoding, createReadStream } = await file;
  //validate file type
  if (!["image/png", "image/jpeg"].includes(mimetype))
    throw new Error("File type not valid");

  //invoke readstream
  const stream: ReadStream = createReadStream();
  let { ext, name } = path.parse(filename);
  name = changeStr(name);
  const pathFile = path.join(
    process.cwd(),
    `${imgDir}${new Date().getTime()}_${name}${ext}`
  );

  //write every stream buffer that comes
  const writeStream = fs.createWriteStream(pathFile);
  stream.pipe(writeStream);

  //validate stream size
  let byteLength = 0;
  for await (const chunk of stream) {
    byteLength += (chunk as Buffer).byteLength;
    if (byteLength > 2000000) {
      fs.unlink(pathFile, (err) => {
        if (err) throw err;
      });
      throw new Error("File truncated as it exceeds the size limit");
    }
  }
  return { pathFile };
};
