const controller = {}
const Image = require('../models/image.model')
const { unlink } = require('fs-extra')
const path = require('path')

controller.renderImages = async (req, res) => {
    const images = await Image.find()
    res.render('index', { images })
}

controller.renderFormImage = async (req, res) => {
    res.render('profile')
}
controller.addImage = async (req, res) => {
    const { title, description } = req.body
    const { originalname, mimetype, path, size } = req.file
    const image = new Image({
        title, description,
        originalname, mimetype, path, size,
    })
    await image.save()
    res.redirect('/')
}

controller.deleteImage = async (req, res) => {
    const imageDeleted = await Image.findByIdAndDelete(req.params.id);
    await unlink(path.resolve(__dirname, `../public/uploads/${imageDeleted.originalname}`))
        // .then(() => console.log('File deleted successfully!'))
        // .catch(err => console.error(err))
    res.redirect('/')
}

module.exports = controller