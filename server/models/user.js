const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: String, 
  clientId: String,
  plant_collection: [{
    type: Schema.Types.ObjectId,
    ref: 'Plant'
  }],
  wish_list: [{
    type: Schema.Types.ObjectId,
    ref: 'Plant'
  }],
  spaces: [{
    type: Schema.Types.ObjectId,
    ref: 'Space'
  }]
})

module.exports = mongoose.model('User', UserSchema)