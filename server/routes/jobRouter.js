const express = require('express');
const router = express.Router();

const jobController = require('../controllers/jobController.js')

// gets jobs documents from jobs collections
router.get('/', 
jobController.getJobsByStatus,
(req, res) => {
    return res.status(200).json(res.locals.jobs)
})

// posts new jobs document to jobs collection
router.post('/', 
jobController.addJob,
(req, res) => {
    return res.status(201).json(res.locals.newJobMessage)
})

// deletes jobs document from jobs collection
router.delete('/deleteJob', jobController.deleteJob, (req, res) => {
    return res.status(200).send('job has been deleted by unique id')
})

// updates status in jobs document in jobs collection
router.patch('/status', 
    jobController.updateJobStatus,
    (req,res) => {
        return res.sendStatus(200)
})

// updates general info in jobs document in jobs collection
router.patch('/details', jobController.updateJobDetails, (req, res) => {
    return res.sendStatus(200);
})

module.exports = router;