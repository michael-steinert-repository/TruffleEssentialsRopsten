# Truffle Essentials

|Command|Description|
|---|---|
|truffle init|Initialize a new Truffle Project|
|truffle compile|Compile Truffle Project|
|truffle develop|Starts a local Development Node (and local Chain)|
|truffle migrate|Compiles and deploys the Smart Contracts to the local Node|
|__Truffle Console__||
|let myContract = await MyContract.deployed()|JavaScript Object of Smart Contract|
|myContract.setMessage("Test", {value: web3.utils.toWei("2", "ether")})|Calling Functions from Smart Contract|
|myContract.setMessageByOwner("Test", {from: accounts[0]})|Calling Functions from Smart Contract|
|myContract.getMessage()|Calling Functions from Smart Contract|
|await web3.eth.getAccounts|Getting Accounts for corresponding private Key (which was imported with Mnemonic)|

## Deploy Smart Contracts on Testnet Ropsten
* Generates a private Key: ```npx mnemonics```
* Save Mnemonics in secrets.json: 
  ![mnemonic](https://user-images.githubusercontent.com/29623199/128623623-225ab82d-d5d8-4bfb-9ece-47c44d7cb1ee.JPG)
* Create own Node in Moralis to deploy the Smart Contract into a Blockchain
  ![speedy node](https://user-images.githubusercontent.com/29623199/128623741-3fe2318e-53e7-4a8b-8296-8e3cb55f544c.JPG)
* Configure the Configuration truffle-config.js
```
    /* Truffle build-in Wallet */
    const HDWalletProvider = require('@truffle/hdwallet-provider');
    /* Getting the Mnemonic */
    const mnemonic = require("./secrets.json").mnemonic;

    module.exports = {
        ropsten: {
        provider: () => new HDWalletProvider(mnemonic, `https://speedy-nodes-nyc.moralis.io/xxx/eth/ropsten`),
        network_id: 3,       // Ropsten's id
        gas: 5500000,        // Ropsten has a lower block limit than mainnet
        confirmations: 2,    // # of confs to wait between deployments. (default: 0)
        timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
        skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
        },
    };    
```
* Open the Truffle Console: ```truffle console --network ropsten```
* Getting some Accounts (build from private Key): ```await web3.eth.getAccounts()```
* Get some Test ETH for the first Account on: https://faucet.ropsten.be/
* Getting Balance (Test ETH) of first Account: ```await web3.eth.getBalance("0x..")```
* Run Truffle to migrate the Smart Contracts into the Testnet: ```migrate```
* Getting Instance of deployed Smart Contract: ```let myContract = await MyContract.deployed()```
* Getting Address of Instance in Testnet: ```myContract.address```
* Checking the Address in a Block Explorer: https://ropsten.etherscan.io/
