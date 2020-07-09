const mongoose = require("mongoose");

var DetailsSchema = mongoose.Schema({
  firstName: String,
  email:String,

});

module.exports = mongoose.model("detailsModel", DetailsSchema);