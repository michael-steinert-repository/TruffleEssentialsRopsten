const MyContract = artifacts.require("MyContract");
const MyContractPermanent = artifacts.require("MyContractPermanent");

module.exports = function (deployer) {
    deployer.deploy(MyContract, "My Message").then(async () => {
        let myContract = await MyContract.deployed();
        let message = myContract.getMessage();
        return deployer.deploy(MyContractPermanent, message);
    });
};
