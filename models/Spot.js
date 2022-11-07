const mongoose = require('mongoose')
const Schema = mongoose.Schema


const spotSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    photoUrl: {
        type: String,
    },
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
})

module.exports = mongoose.model('Spot', spotSchema)