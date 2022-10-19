const mongoose = require('mongoose');

const { Schema } = mongoose;

// schema for user verification
const userSchema = new Schema({
  username: { type: String, required: true },
  userId: Schema.Types.ObjectId,
  password: { type: String, required: true },
});


// schema for adding jobs, related to username
const jobSchema = new Schema({
  username: { type: String, required: true },
  companyName: String,
  created_at: { type: Date, default: Date.now() },
  jobTitle: String,
  status: { type: String, default: 'applied' },
  dateApplied: String,
  linkToJob: String,
  referral: String,
  notes: String,
  offerDetails: {
    salary: Number,
    notes: String,
    hiringDate: Date,
    startingDate: Date,
  },
});

const Users = mongoose.model('users', userSchema);
const Jobs = mongoose.model('jobs', jobSchema);

module.exports = { Users, Jobs };
