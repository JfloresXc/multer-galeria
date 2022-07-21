const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/uploads'))
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({
    storage,
    limits: {fieldSize: 1000000},
    fileFilter: (req, file, cb) => {
        const extImage = /jpeg|jpg|png|gif/
        const extName = extImage.test(path.extname(file.originalname))
        const mimetype = extImage.test(file.mimetype)
 
        if(mimetype) return cb(null, true)

        cb('Error: No es una imagen')
    }
}).single('image')
// const upload = multer({dest: path.join(__dirname, '../public/uploads')}).single('image')

module.exports = upload