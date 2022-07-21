const mongoose = require("mongoose")

const URI =
	process.env.DB_URI ||
	"mongodb+srv://unicocluster:unicocluster@cluster0.xw0zz6g.mongodb.net/?retryWrites=true&w=majority"

mongoose
	.connect(URI, {
		useCreateIndex: true,
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useFindAndModify: true,
	})
	.then(() => {
		console.log("Database connected !")
	})
	.catch((error) => {
		console.log(error)
	})
