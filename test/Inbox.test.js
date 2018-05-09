const assert = require('assert'); //making assertions about tests
const ganache = require('ganache-cli');
const Web3 = require('web3'); // Instances --> Konstruktor --> normalerweise nur eine Instanz, außer es werden mehrere
//Netzwerke angeschlossen
const web3 = new Web3(ganache.provider()); //connect to ganache --> instanz mit der wir arbeiten
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;

beforeEach(async () => {
    // Get a list of all accounts
    accounts = await web3.eth.getAccounts();  // await needs async statement
//use one of those accounts to deploy the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))  //instance of a contract --> constructor
        .deploy({ data: bytecode, arguments: ['Hi there!'] })
        .send({ from: accounts[0], gas: '1000000'} )

});





describe('Inbox', () => {
    it('deploys a contract', () => {
        console.log(inbox);
});


});