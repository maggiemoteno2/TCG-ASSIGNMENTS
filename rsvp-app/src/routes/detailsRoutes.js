const ApplicantInfo = require('./../models/detailsModels');

const details = function(app){
app.post("/applicantInformation",async(req,res)=>{
  try {
    const detailsSchema = new ApplicantInfo({
      firstName: req.body.firstName,
      email: req.body.email
    });
    const detail =detailsSchema.save({firstName: req.body.firstName , email:req.body.firstName});
    res.status(201).json(detailsSchema);
    console.log(req.body.firstName)
  }catch(e){
console.log(e)
  }
})
}



module.exports = { details}