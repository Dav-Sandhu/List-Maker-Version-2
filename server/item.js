import mongoose from 'mongoose'

const itemSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	date: String,
	image: String,
	shape: {
		type: String,
		required: true
	},
	rank: {
		type: Number,
		required: true
	}
})

const Item = mongoose.model("Item", itemSchema)
export default Item