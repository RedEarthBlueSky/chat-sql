'use strict';

let memory;   //  create
const dbFilePath = './db.json';

try {
  fs.writeFileSync(dbFilePath, JSON.stringify({db: []}), {encoding: 'utf8', flag: 'wx'});
} catch (e) {}

fs.readFile(dbFilePath, 'utf8', function (err, data) {
  memory = JSON.parse(data);
});

function dumpMemoryToDisk () {
  fs.writeFile(dbFilePath, JSON.stringify(memory), function (err) {
    if (err) throw err;
  });
}

setInterval(dumpMemoryToDisk, 10000);

exports.getLatest = function (num) {
  return memory.db.slice(-num);
};

exports.set = function (content, timestamp) {
  let newMsg = {
    content,
    timestamp
  };
  memory.db.push(newMsg);
  return newMsg;
};
