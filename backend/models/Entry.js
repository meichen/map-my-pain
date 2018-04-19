const mongoose = require('../db/connection')

const EntrySchema = new mongoose.Schema({
	date: String,
	time: String,
	description: String,
	createdAt: { type: Date, default: Date.now }
})

const EntryModel = mongoose.model('Entry', EntrySchema)

module.exports = {
	EntryModel,
	EntrySchema
}
