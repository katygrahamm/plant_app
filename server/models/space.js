const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SpaceSchema = new Schema({
    name: String,
    room_size: String,
    room_height: String,
    water: String,
    light: String,
    kid_friendly: String,
    pet_friendly: String,
    difficulty_level: String,
    plant_collection: [{
        type: Schema.Types.ObjectId,
        ref: 'Plant'
    }]
})

module.exports = mongoose.model('Space', SpaceSchema)