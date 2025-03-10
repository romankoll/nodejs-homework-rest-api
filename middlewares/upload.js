import multer from "multer";
import path from "path";

const destination = path.resolve("tmp");

const storage = multer.diskStorage({
  destination,
  filename: (req, file, cb) => {
    const { originalname } = file;
    // console.log(file);
    const uniquePrefix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const fileName = `${uniquePrefix}_${originalname}`;
    cb(null, fileName);
  },
});

const limits = {
  fieldSize: 1024 * 1024 * 5,
};

const upload = multer({ storage, limits });

export default upload;
