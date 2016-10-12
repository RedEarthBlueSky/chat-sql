'use strict';

//  The router sets the routes and how we respond to them
//  It sends this information to the router by requiring
//  methods from them

const qs = require('qs');
const router = require('express').Router();
const bodyParser = require('body-parser');

const messagesCtrl = require('./controller.js');

//  on get call on route messages the getLatest function from controller
router.get('/messages', messagesCtrl.getLatest);

//  on post send to route the values from the create function in controller
router.post('/messages', bodyParser.urlencoded({extended: false}), messagesCtrl.create);

//  export the router
module.exports = router;
