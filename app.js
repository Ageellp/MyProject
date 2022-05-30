const Web3 = require('web3')
const web3 = new Web3('https://speedy-nodes-nyc.moralis.io/e75f2c0c3fa6bd81d5822705/bsc/testnet')

//const balance = web3.eth.getBalance("0x279272a3FbDD0cd54b6cD4E131F863d75E7D0a9a").then(console.log)
const address="0x2F2e40179A36700A74De8bEF0AaC976480C1337F"
const privatekey ="0ed69ce56f8c216eed4cb7af10cba6d5be5531e9cb9c229ecacc424750fba0cf"
const receiver="0x279272a3FbDD0cd54b6cD4E131F863d75E7D0a9a"

const deploy = async () => {
//console.log('Sending a transaction from ${address}to ${receiver}')
const createTransaction = await web3.eth.accounts.signTransaction(
{
from:address,
to: receiver,
value: web3.utils.toWei('0.1','ether'),
gas: 40000,


},
privatekey
);
const receipt= await web3.eth.sendSignedTransaction(createTransaction.rawTransaction);
console.log('transaction successful with hash:')
}
deploy()