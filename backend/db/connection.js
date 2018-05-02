const mongoose = require('mongoose')

if (process.env.NODE_ENV == 'production') {
	mongoose.connect(process.env.DATABASE_URL)
} else {
	mongoose.connect('mongodb://localhost/map-my-pain')
}

mongoose.Promise = Promise

module.exports = mongoose
