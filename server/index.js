const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const List = require('./list.js')
const cors = require('cors')
const { readFileSync } = require('fs')
require('dotenv').config()

const port = process.env.PORT || process.env.MONGODB_URI || 8000

const userData = JSON.parse(readFileSync(path.join(__dirname, "data.json"), "utf-8"))

const user = {
	username: process.env.DBUser || userData.username,
	password: process.env.DBPass || userData.password,
	database: "ListData"
}

if (user.username !== userData.username){
	user.database = "AdminListData"
}

const dbURI = "mongodb+srv://" + user.username + ":" + user.password + 
	"@project-backend.grxkvf1.mongodb.net/" + user.database + "?retryWrites=true&w=majority"

const insertList = async (list, name) => {
	
	let exists = 0
	
	const l = new List({
		list: list,
		name: name
	})
	
	await List.find({name: name})
		.then(result => exists = result.length)
	
	if (exists === 0){
		l.save().catch(err => console.log(err))
	}else if (exists > 0){
		List.findOneAndUpdate({name: name}, 
		{list: list}).catch(err => console.log(err))	
	}
}

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send("Accessing " + user.username + "'s Database...")
})

app.get('/add-list/:list/:name/', (req, res) => {
	insertList(JSON.parse(req.params.list), req.params.name)
	res.redirect('/')
})

app.get('/remove-list/:rank/', (req, res) => {
	List.deleteOne({rank: parseInt(req.params.rank)})
		.then(() => {
			res.redirect('/')
		}).catch(err => console.log(err))
})

app.post('/', (req, res) => {
	if (req.body.type === "insert"){
		insertList(JSON.parse(req.body.list), req.body.name)
		res.send("request received!")
	}else if (req.body.type === "getLists"){
		List.find()
			.then(result => res.send(result))
				.catch(err => console.log(err))
	}else{
		List.deleteOne({name: req.body.name})
			.then(() => res.send("request received!"))
				.catch(err => res.send(err))
	}
	
	
})

mongoose.connect(dbURI)
	.then(result => app.listen(port))
	.catch(err => console.log(err))
