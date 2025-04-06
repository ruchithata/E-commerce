const multer = require("multer");

const avatar = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '/uploads');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now + "-" + Math.round.apply(Math.random() * 1e9);
        const filename = file.originalname.split(".")[0];

        cb(null, filename + "-" + uniqueSuffix + ".png");
    }
});

exports.Avatar = multer({ storage: avatar});