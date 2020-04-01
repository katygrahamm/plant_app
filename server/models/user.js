const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  google_id: String,
  profile_name: String,
  profile_pic_url: String,
  email: String, 
  date_created: Date,
  plant_collection: [{
    type: Schema.Types.ObjectId,
    ref: 'Plant'
}],
  wishList: [{
    type: Schema.Types.ObjectId,
    ref: 'Plant'
}],
  spaces: [{
    type: Schema.Types.ObjectId,
    ref: 'Space'
}]
})

module.exports = mongoose.model('User', UserSchema)