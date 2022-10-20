const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController.js')

//create user or return false if invalid credentials
router.post('/signup',
  userController.userSignup,
  (req, res) => {
    return res.status(200).json(res.locals.validSignup)
})

//check whether username exists in database 
//if the username exists, compare hashes with the input password
router.post('/login',
    userController.userLogin,
    (req, res) => {
    return res.status(200).json(res.locals.validLogin)
})

module.exports = router;