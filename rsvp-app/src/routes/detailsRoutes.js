const DetailsModel = require('./../models/detailsModels');

const details = function(app){
app.post("/applicantInformation",(req,res)=>{
  console.log(req.body)
})
}



module.exports = { details}