// const multer = require("multer");

// const avatar = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, '/uploads');
//     },
//     filename: (req, file, cb) => {
//         const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//         const filename = file.originalname.split(".")[0];

//         cb(null, filename + "-" + uniqueSuffix + ".png");
//     }
// });

// const productSrorage = multer.diskStorage({
//     destination:(req, file, cb) => {
//         cb(null, 'productUploads/');
//     },
//     filename: (req, file, cb) => {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
//         const filename = file.originalname.split(".") [0];
//         cb(null, filename + "-" + uniqueSuffix + ".png");
//     }
// })

// exports.Avatar = multer({ storage: avatar});
// exports.productUpload = multer({storage: productSrorage});



const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Make sure upload folders exist
const ensureDir = (dir) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
};

const avatarPath = path.join(__dirname, "../uploads");
const productPath = path.join(__dirname, "../productUploads");

ensureDir(avatarPath);
ensureDir(productPath);

const avatar = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, avatarPath);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        const filename = file.originalname.split(".")[0];
        cb(null, filename + "-" + uniqueSuffix + ".png");
    }
});

const productStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, productPath);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const filename = file.originalname.split(".")[0];
        cb(null, filename + "-" + uniqueSuffix + ".png");
    }
});

exports.Avatar = multer({ storage: avatar });
exports.productUpload = multer({ storage: productStorage });
