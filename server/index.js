import mongoose from 'mongoose'
import express from 'express'
import { readFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import Item from './item.js'
import cors from 'cors'

const __dirname = dirname(fileURLToPath(import.meta.url))

const data = JSON.parse(readFileSync(join(__dirname, "data.json"), "utf-8"))
const dbURI = "mongodb+srv://" + data.username + ":" + data.password + 
	"@project-backend.grxkvf1.mongodb.net/?retryWrites=true&w=majority"

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
	Item.find().then((response) => {
		res.send(response)
	}).catch(err => console.log(err))
})

app.put("/", (req, res) => {
	if (req.body.type === "insert"){
		const i = new Item({
			name: req.body.name,
			date: req.body.date,
			image: req.body.image,
			shape: req.body.shape,
			rank: parseInt(req.body.rank)
		})
		
		i.save().catch(err => console.log(err))
	}else{
		Item.deleteOne({rank: parseInt(req.body.rank)})
	}
})

mongoose.connect(dbURI).then(() => {
	app.listen(8000)
}).catch(err => console.log(err))