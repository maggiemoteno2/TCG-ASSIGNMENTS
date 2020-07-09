const DetailsModel = require('./../models/detailsModels');

const details = function(app){
  app.get("//applicantInformation")
app.post("/applicantInformation",(req,res)=>{
  res.status(201).send(req.body)
  console.log(req.body)
})
}



module.exports = { details}