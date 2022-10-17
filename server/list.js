import mongoose from 'mongoose'
const Schema = mongoose.Schema

const listSchema = new Schema({
	name: String,
	list: {
		type: Array,
		required: true
	}
})

const list = mongoose.model('List', listSchema)
export default list