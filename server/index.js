import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import path from 'path'
import mongoose from 'mongoose'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import List from './list.js'
import cors from 'cors'

const port = process.env.PORT || 8000

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const userData = JSON.parse(readFileSync(path.join(__dirname, "data.json"), "utf-8"))

const dbURI = "mongodb+srv://" + userData.username + ":" + userData.password + 
	"@project-backend.grxkvf1.mongodb.net/ListData?retryWrites=true&w=majority"

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
  List.find().then((result) => res.send(result))
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
	}else{
		List.deleteOne({rank: parseInt(req.body.rank)})
			.catch(err => res.send(err))
	}
})

mongoose.connect(dbURI)
	.then(result => app.listen(port))
	.catch(err => console.log(err))
