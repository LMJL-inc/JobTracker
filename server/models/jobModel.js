const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema ({
  jobTitle: {type: String, required: true},
  company: {type: String, required: true},
  dateApplied: {type:String,required:true},
  status: {type:String, required:true},
  link: {type:String, rquired:true},
  email: {type:String, rquired:true},
  password: {type:String, rquired:true}
});



module.exports = mongoose.model('job', jobSchema);
