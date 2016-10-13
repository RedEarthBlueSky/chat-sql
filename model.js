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


exports.getLatest = function (num) {
  return new Promise (function (resolve, reject) {
    connection.query(`SELECT * FROM ${tableName} posting ORDER BY timestamp DESC LIMIT ${num}`,
       function(err, rows, fields) {
        if (err) reject(err);
        resolve(rows);
    });
  });
};


exports.set = function (timestamp, content) {
  return new Promise (function (resolve, reject) {
    connection.query(`INSERT into ${tableName} (timestamp, content) values (${timestamp}, '${content}')`,
    function (err, data){
      if (err) reject(err);
      else resolve({id: data.insertId, timestamp: timestamp, content: content});
    });
  });
};
