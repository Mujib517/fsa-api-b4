const multer = require('multer');

const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: function (req, file, cb) {
        const prefix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const filename = prefix + '-' + file.originalname;
        req.body.image = filename;
        cb(null, filename);
    },
});

const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        if (file.mimetype.startsWith('image'))
            cb(null, true);
        else
            cb('Invalid file type');
    }
});

module.exports = upload;
