'use strict';

const messagesModel = require('./model.js');

exports.getLatest = function (req, res) {
  res.json(messagesModel.get(10));
};

exports.create = function (req, res) {
  res.json(messagesModel.set(req.body.content, Date.now()));
};
