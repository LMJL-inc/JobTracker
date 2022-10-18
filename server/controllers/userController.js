const express = require('express');
const UserJobs = require('../models/userModel.js')


module.exports = {
    async addUser(req,res,next) {
        try{
            const newUser = await new UserJobs(req.body).save();
            return next()
        }catch(err){
            return next({message:'Something went wrong in server', log:'Something went wrong in addUser middleware function'});
        }

    }
}