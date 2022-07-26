const mongoose = require("mongoose");

// product uchun

const cilientsSchema = mongoose.Schema({
  fish: String,
  kabinet: String,
  bolim: String,
  lavozim: String,
  texnikBaza: [Object],
  tel: String,
  chatID: String,
  tashkilot_id: String,
  date: Date,
});

const CilientModel = mongoose.model("CilientModel", cilientsSchema);

module.exports = CilientModel;
