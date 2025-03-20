const multer = require("multer");
const uuid = require("uuid").v4();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, `${uuid} - ${file.originalname}`);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    const validMimeTypes = ["image/jpg", "image/png", "image/jpeg"];
    if (validMimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(
        new Error(
          "Please upload image in one of the following format: [jpeg, jpg, png]"
        ),
        false
      );
    }
  },
});

module.exports = upload;
