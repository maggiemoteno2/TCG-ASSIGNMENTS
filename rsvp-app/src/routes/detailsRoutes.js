const DetailsSchema = require('./../models/detailsModels');

const details = function(app){
  app.get("/applicantInformation",(req,res)=>{
  
  })
app.post("/applicantInformation",(req,res)=>{
  res.status(201).send(req.body)
  console.log(req.body)
})
}



module.exports = { details}