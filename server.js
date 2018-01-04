const express = require('express');
const path = require('path');
const app = express();
const port = 8080;
app.listen(port,function(){
  console.log('Update your Journal!');
});
app.get('/index', function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});
