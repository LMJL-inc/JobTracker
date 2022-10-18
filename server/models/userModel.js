const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const myURI = 'mongodb+srv://jigglypuff:jigglypuff1@cluster0.qgbjfs3.mongodb.net/?retryWrites=true&w=majority';
const URI = process.env.MONGO_URI || myURI;




const userSchema = new Schema ({
  username: {type: String, required: true},
  userId: {type: Schema.Types.ObjectId, required:true},
  password: {type:String, required:true},
  jobs: [
    {
    jobTitle: {type: String, required: true},
    company: {type: String, required: true},
    created_at: {type: Date, default: Date.now},
    status: {type:String, required:true},
    link: {type:String, required:true},
    email: {type:String, required:true},
    password: {type:String, required:true}
  }
  ]
});


const UserJobs = mongoose.model('UserJobs', userSchema);

module.exports = UserJobs;
