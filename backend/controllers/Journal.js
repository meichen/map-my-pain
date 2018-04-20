const express = require('express')
const { EntryModel } = require('../models/Entry')

const router = express.Router()

router.get('/', (req, res) =>
	EntryModel.find().then(entries =>
		res.json(entries.sort((cur, prev) => cur.date < prev.date))
	)
)

router.route('/create').post(({ body: { date, time, description } }, res) =>
	EntryModel.create({
		date,
		time,
		description
	}).then(entry => res.json(entry))
)

module.exports = router
