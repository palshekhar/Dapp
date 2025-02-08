
//SPDX-License-Ide// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract chai{

    struct Details{
        string name;
        string message;
       uint timestamp;
       address from;
    }

    Details[] details;

    uint public amountadded;

    address payable owner;

    constructor(){
        owner=payable(msg.sender);
    }

    function chaibuy(string memory name,string memory message) public payable {
          require(msg.value>0,"please add some amount ");
          amountadded=msg.value+amountadded;
          owner.transfer(msg.value);
          details.push(Details(name,message,block.timestamp,msg.sender));
    }

    function getdetailsarray() public view returns(Details[] memory){
          return details;
    }
}