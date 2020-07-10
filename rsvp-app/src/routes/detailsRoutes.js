const ApplicantInfo = require('./../models/detailsModels');

const details = function(app){
app.post("/applicantInformation",async(req,res)=>{
  const detail = await ApplicantInfo.save({firstName: req.body.firstName , email:req.body.firstName});
  try {
    const detailsSchema = new ApplicantInfo({
      firstName: req.body.firstName,
      email: req.body.email
    });
    res.status(201).json(detailsSchema);
    console.log(detail)
  }catch(e){
console.log(e)
  }
})
}



module.exports = { details}