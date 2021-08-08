pragma solidity 0.8.4;

contract MyContract {

    string message;
    address public owner;

    constructor(string memory _message) {
        message = _message;
        owner = msg.sender;
    }

    function getMessage() public view returns (string memory){
        return message;
    }

    function setMessage(string memory _message) public payable {
        require(msg.value > 1 ether);
        message = _message;
    }

    function setMessageByOwner(string memory _message) public {
        require(msg.sender == owner);
        message = _message;
    }
}
