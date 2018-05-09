const path = require('path');
const fs = require('fs');
const solc =require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, "utf8");

//console.log(solc.compile(source,1));  --> zeigt gesamten Inhalt des Vertrags

module.exports = solc.compile(source,1).contracts[':Inbox']; //Bytecode den wir an ein Ethereum Netz übergeben  können
