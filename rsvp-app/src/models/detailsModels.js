const mongoose = require("mongoose");

var DetailsSchema = mongoose.Schema({
  firstName: String,
  email:String,

});
var ApplicantInfoModel = mongoose.model('ApplicantInfoModel', DetailsSchema);


module.exports = ApplicantInfoModel;