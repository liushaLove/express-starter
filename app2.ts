import express from "express";

const app = express();
app.get('/xxx', function(req, res){
  res.send( ' users online2');
});

const server = app.listen(3000, function() {
  console.log('Listening on port 3000');
});