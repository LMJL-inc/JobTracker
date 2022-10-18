const express = require('express');
const router = express.Router();

const jobController = require('../controllers/jobController.js')

router.get('/',(req,res,next) => {
    return res.status(200).json(res.locals.allJobs)
})

router.post('/',(req,res,next) => {
    return res.status(200).json(res.locals.allJobs)
})

router.delete('/',(req,res,next) => {
    return res.status(200).json(res.locals.allJobs)
})

module.exports = router;