const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ideaSchema = new Schema({
  text: {type: String, required: true, unique: true}
}, {
  timestamps: true,
});

module.exports = mongoose.model('Ideas', ideaSchema);