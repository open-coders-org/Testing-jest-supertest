const express = require('express')
const chalk = require('chalk')


const port = process.env.PORT || 3000

const app = express()

app.get('/', (req,res) => {
	return res.status(200).send({
		message: 'Working...'
	})
})

if (!module.parent){
	app.listen(port , (err) => {
		if (err) return console.error(err)
		console.log(`${chalk.green('server is running on port ')} ${chalk.bold.red(port)}`)
	})
} else module.exports = app
