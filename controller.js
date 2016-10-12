'use strict';

//  the controllers is given the routes from the router
//  it gives the information from the router to the model

const messagesModel = require('./model.js');

exports.getLatest = function (req, res) {
  messagesModel.getLatest(5).then(function (value) {
    //  TODO:  write more logic for this
    res.json(value);    //  Success!
  }, function (reason) {
    res.send(reason);   //  Error!
  });
};
//  we want to update this to implement a call back so it does not return undefined
exports.create = function (req, res) {
  messagesModel.set(Date.now(), req.body.content).then(function (value){
    res.json(value);  //  Success!
  }, function (reason) {
    res.send(reason);  //  Error!  TODO for both extend functionality
  });
};
