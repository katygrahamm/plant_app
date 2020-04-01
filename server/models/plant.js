const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PlantSchema = new Schema({
  common_name: String,
  botanical_name: String,
  max_height: Number,
  max_width: Number, 
  light: String,
  water: String,
  care: String,
  about: String,
  image_url: String,
  pet_friendly: String,
  kid_friendly: String,
  difficulty: String,
})

module.exports = mongoose.model('Plant', PlantSchema)