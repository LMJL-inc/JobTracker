const { Users } = require('../models/schemas.js');
const bcrypt = require('bcrypt');
const SALT = 3;

const mongoose = require('mongoose');
// connect to mongoDB database
mongoose.connect(process.env.MONGO_URI, { dbName: 'JobTracker' })
  .then(() => console.log('successfully connected to database'))
  .catch((error) => console.log(error));

module.exports = {
    // creates new user in database
    async userSignup(req, res, next) {
        const { username, password } = req.body;
        //check that the username and password are both not empty
        if (!username.length || !password.length) {
            res.locals.validSignup = false;
            return next();
        }
        try {

            // mongodb method used to check if user exists in database
            const user = await Users.findOne({ username: username });

            if (user) {
                res.locals.validSignup = false;
                return next();
            } else {

                // bcrypt algorithm creates salt
                const salt = await bcrypt.genSalt(Number(SALT));

                // salt used with user password to create hashed password
                const hashPassword = await bcrypt.hash(password, salt);

                // initializes new document instance with username and hashed password
                const newUser = new Users({ username: username, password: hashPassword });
                // saves new document in database in user collection
                newUser.save();
                res.locals.validSignup = true;
                return next();
            }
        } catch(err) {
            return next({
                message:`Error in userController.userSignup: ${err}`, 
                status: 500,
                log:'Something went wrong in userController userSignup middleware function'
            });
        }

    },

    // validates user logging in
    async userLogin(req,res,next) {
        const { username, password } = req.body;
        //check that the username and password are both not empty
        if (!username.length || !password.length) {
            res.locals.validLogin = false;
            return next();
        }
        try {
            
            // mongodb method used to see if username exists in user collection
            const user = await Users.findOne({ username: username });
            if (!user) {
              res.locals.validLogin = false
              return next()
            } else {
                // checking plaintext password with hashedpassword in database using bcrypt
                res.locals.validLogin = await bcrypt.compare(password, user.password);
                return next();
            }
        } catch(err) {
            return next({
                message:`Error in userController.userLogin: ${err}`, 
                status: 500,
                log:'Something went wrong in userController userLogin middleware function'
            });
        }
    }
}