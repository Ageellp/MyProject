const Web3 = require('web3')
const web3 = new Web3('https://speedy-nodes-nyc.moralis.io/e75f2c0c3fa6bd81d5822705/bsc/testnet')
const express = require('express');
const path = require('path');
const app = express();
//const balance = web3.eth.getBalance("0x279272a3FbDD0cd54b6cD4E131F863d75E7D0a9a").then(console.log)
const address="0x279272a3FbDD0cd54b6cD4E131F863d75E7D0a9a"
const privatekey ="4b666942d99605fc5c8e049d67f986262f6f8fe994c4f4ebf5b64b64fd581b26"
const receiver="0x2F2e40179A36700A74De8bEF0AaC976480C1337F"
app.get('/', (req, res) => {
  
    // Sending our index.html file as 
    // response. In path.join() method
    // __dirname is the directory where
    // our app.js file is present. In 
    // this case __dirname is the root
    // folder of the project.
    res.sendFile(path.join(__dirname, '/public/index.html'));
  });
    
  app.listen(3000, () => {
    console.log('Server is up on port 3000');
  });
const deploy = async () => {
//console.log('Sending a transaction from ${address}to ${receiver}')
const createTransaction = await web3.eth.accounts.signTransaction(
{
from:address,
to: receiver,
value: web3.utils.toWei('0.1','ether'),
gas: 21000,


},
privatekey
);
const receipt= await web3.eth.sendSignedTransaction(createTransaction.rawTransaction);
console.log('transaction successful with hash:')
}
deploy()