const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const pkg = require('./package.json')
const JournalController = require('./controllers/Journal')

const app = express()
app.use(parser.urlencoded({ extended: true }))
app.use(parser.json())
app.use(cors())
app.set('port', process.env.PORT || 4000)

app.use('/journal', JournalController)

app.listen(app.get('port'), () =>
	console.log(`${pkg.name} listening on port ${app.get('port')}...`)
)
