const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController.js');

// gets jobs documents from jobs collections
router.get(
  '/',
  jobController.getJobsByStatus,
  (req, res) => res.status(200).json(res.locals.jobs),
);

// posts new jobs document to jobs collection
router.post(
  '/',
  jobController.addJob,
  (req, res) => res.status(201).json(res.locals.newJobMessage),
);

// deletes jobs document from jobs collection
router.delete('/deleteJob',
  jobController.deleteJob,
    (req, res) => res.sendStatus(200));

// updates status in jobs document in jobs collection
router.patch(
  '/status',
  jobController.updateJobStatus,
  (req, res) => res.sendStatus(200),
);

// updates general info in jobs document in jobs collection
router.patch('/details',
  jobController.updateJobDetails,
    (req, res) => res.sendStatus(200));

module.exports = router;
