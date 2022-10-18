const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;




// import router
const jobRouter = require('./routes/jobRouter.js')
const userRouter = require('./routes/userRouter.js')

// parse information coming from the front-end
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// serving dynamic files
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname,'../client/index.html'));
});

// serve to localhost:3000
app.get("/backend", (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, "../dist/bundle.js"));
});

// routes
app.use('/api/jobs', jobRouter);
app.use('/api/user', userRouter);

app.use((req, res, next)=>{
  return res.status(404).send('No page found');
});

//global error handler
app.use((err, res, req, next)=>{
  const defaultErr = {
    log: 'Express error handler caught unknown error',
    status: 500,
    message: { err: 'something went wrong in server' },
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).send(errorObj.message);
});

app.listen(PORT, ()=>{
  console.log(`Server listening to PORT: ${PORT}...`);
});

module.exports = app;