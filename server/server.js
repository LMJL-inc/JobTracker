const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

// parse information coming from the front-end
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());


app.get('/', (req,res,next)=>{
  return res.status(200).sendFile(path.join(__dirname,'../client/index.html'));
});

app.use(express.static(path.resolve('./client/index.js')));




app.use((req,res,next)=>{
  return res.status(404).send('No page found');
});

app.use((err,res,req,next)=>{
  const demoObj = {
    message: {err: 'something went wrong in server'},
    log: 'something went wrong',
    status: 500
  };
  const currError = Object.assign(demoObj, err);
  console.log(currError.log);
  return res.status(currError.status).send(currError.message);
});

app.listen(PORT, ()=>{
  console.log(`Listening to PORT: ${PORT}`);
});