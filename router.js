'use strict';

const qs = require('qs');
const router = require('express').Router();
const bodyParser = require('body-parser');

const messagesCtrl = require('./controller.js');

router.get('/messages', messagesCtrl.getLatest);

router.post('/messages', bodyParser.urlencoded({extended: false}), messagesCtrl.create);

module.exports = router;
