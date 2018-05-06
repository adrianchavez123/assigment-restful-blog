const express = require('express');
const router = require('./routes/index.js');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use((req,res,next) =>{
  req.store = store;
  next();
});
app.use('/',router);


let store = {
  posts:[
  ]
};


app.listen(3000);
