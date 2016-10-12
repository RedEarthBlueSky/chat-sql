'use strict';

//  the controllers is given the routes from the router
//  it gives the information from the router to the model

const messagesModel = require('./model.js');

exports.getLatest = function (req, res) {
  messagesModel.getLatest(10, function (err, data){
    if (err) res.send(400);  //  TODO:  write more logic for this
    else res.json(data);
  });
};
//  we want to update this to implement a call back so it does not return undefined
exports.create = function (req, res) {
  messagesModel.set(Date.now(), req.body.content, function (err, data) {
    if (err) res.send(400);  //  TODO from above
    else {
      res.json(data);
      // res.send(200);
    }
  });
};
