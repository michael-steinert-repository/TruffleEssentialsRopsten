const MyContract = artifacts.require("MyContract");

/* For each Keyword "contract" it will be the Smart Contract redeployed */
contract("MyContract", (accounts) => {
    it("should return message", async () => {
       let myContract = await MyContract.deployed();
       let message = await myContract.getMessage();
       assert.equal(message, "My Message");
    });

    it("should be owner", async () => {
        let myContract = await MyContract.deployed();
        let owner = await myContract.owner();
        assert.equal(owner, accounts[0]);
    });
});