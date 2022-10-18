const express = require('express');
const router = express.Router();


router.post('/signup',(req,res,next) => {
    return res.status(200).json(res.locals.allJobs)
})

router.delete('/login',(req,res,next) => {
    return res.status(200).json(res.locals.allJobs)
})

module.exports = router;