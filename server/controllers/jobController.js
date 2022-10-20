const { Jobs } = require('../models/schemas');
const mongoose = require('mongoose');
require('dotenv').config(); // hide mongoDB credentials in .env file

// connect to mongoDB database
mongoose.connect(process.env.MONGO_URI, { dbName: 'JobTracker' })
  .then(() => console.log('successfully connected to database'))
  .catch((error) => console.log(error));

module.exports = {

  // adds new application document to jobs collection
  async addJob(req, res, next) {
    try {
      const { username, companyName, jobTitle } = req.body;

      // mongodb method used to find existing application
      const data = await Jobs.findOne({ username, companyName, jobTitle });

      if (!data) {
        const newJob = await new Jobs(req.body);

        // mongodb method adds new application document succesfully
        newJob.save();
        res.locals.newJobMessage = 'Succesful addition to databases';
        return next();
      }
      res.locals.newJobMessage = 'Application already exists';
      return next();
    } catch (err) {
      return next({
        message: `Error in jobController.addJob: ${err}`,
        status: 500,
        log: 'Something went wrong in jobController addJob middleware function',
      });
    }
  },

  // retrieves all jobs documents associated with status received
  async getJobsByStatus(req, res, next) {
    const { username, status } = req.query;
    try {
      console.log(req.query);
      // mongodb method used to find all jobs documents
      // eslint-disable-next-line object-shorthand
      const data = await Jobs.find({ username: username, status: status });
      res.locals.jobs = data;
      return next();
    } catch (err) {
      return next({
        message: `Error in jobController.getJobsByStatus: ${err}`,
        status: 500,
        log: 'Something went wrong in jobController.getJobsByStatus middleware function',
      });
    }
  },

  // updates jobs status in existing document
  async updateJobStatus(req, res, next) {
    const { _id, status } = req.body;
    try {
      const updatedJob = await Jobs.updateOne({ _id }, { status });
      return next();
    } catch (err) {
      return next({
        message: `Error in jobController.updateJobStatus: ${err}`,
        status: 500,
        log: 'Something went wrong in jobController.updateJobStatus middleware function',
      });
    }
  },

  // updates existing document information
  async updateJobDetails(req, res, next) {
    const { _id } = req.body;
    try {
      // mongodb updates single jobs document in jobs collection
      await Jobs.updateOne({ _id }, req.body);
      return next();
    } catch (err) {
      return next({
        message: `Error in jobController.updateJobDetails: ${err}`,
        status: 500,
        log: 'Something went wrong in jobController.updateJobDetails middleware function',
      });
    }
  },

  // deletes existing jobs document from jobs collection
  async deleteJob(req, res, next) {
    try {
      const { _id } = req.body;

      // mongodb method deletes single document
      await Jobs.deleteOne({ _id });
      return next();
    } catch (err) {
      return next({
        message: `Error in jobController.deleteJob: ${err}`,
        status: 500,
        log: 'Something went wrong in jobController.deleteJob middleware function',
      });
    }
  },
   async getJobsByUser(req, res, next) {
    const { username } = req.query;
    try {
      // mongodb method used to find all jobs documents
      // eslint-disable-next-line object-shorthand
      const data = await Jobs.find({ username: username });
      res.locals.jobs = data;
      return next();
    } catch (err) {
      return next({
        message: `Error in jobController.getJobsByStatus: ${err}`,
        status: 500,
        log: 'Something went wrong in jobController.getJobsByStatus middleware function',
      });
    }
  },

};
