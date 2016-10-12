'use strict';

// The model sends and receives elements from the database

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  password: 'admin',
  database: 'cw_chat'
});

const tableName = 'messages';

exports.getLatest = function (num, cb) {
  connection.query(`SELECT * from ${tableName}`, function(err, rows, fields) {
    if (err) cb(err);
    cb(null, rows);
  });
};


exports.set = function (timestamp, content, cb) {
  connection.query(`INSERT into ${tableName} (timestamp, content) values (${timestamp}, '${content}')`, function (err, data){
    if (err) cb(err);
    else cb (null, {
      timestamp: timestamp,
      content: content
    });
  });
  // return undefined;
};
