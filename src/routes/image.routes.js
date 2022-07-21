const { Router } = require('express')
const routes = Router()
const Image = require('../models/image.model')

const { addImage, deleteImage,
    renderImages,
    renderFormImage} = require('../controllers/image.controllers')

routes.route('/')
    .get(renderImages)

routes.route('/upload')
    .get(renderFormImage)
    .post(addImage)

routes.route('/:id')
    .get(deleteImage)

module.exports = routes
