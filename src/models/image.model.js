const { Schema, model } = require("mongoose")

const Image = new Schema(
	{
		title: { type: String, requerid: true },
		description: { type: String, requerid: true },
		originalname: { type: String, requerid: true },
		mimetype: { type: String, requerid: true },
		path: { type: String, requerid: true },
		size: { type: Number, requerid: true },
	},
	{
		timestamps: true,
	}
)

module.exports = model("images", Image)
