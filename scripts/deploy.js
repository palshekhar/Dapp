// const { ethers } = require("hardhat");


async function getBalances(address){
  const balance=await ethers.provider.getBalance(address);
  return  ethers.formatEther(balance);  
}

async function consoleBalances(addresses){
   let counter=0;
   for(const address of addresses){
      console.log(`counter value is ${counter} , address is `,await getBalances(address));
      counter++;
   }
}

async function consoledetails(details){
let counter=0;
for(const detail of details){
   const name=detail.name;
   const message=detail.message;
   const time=detail.timestamp;
   const from=detail.from;
   console.log(`time== ${time},message= ${message},name== ${name},from== ${from}`);
}
}

async function main() {
    const[owner,from1,from2,from3]=await ethers.getSigners();
    const chai=await ethers.getContractFactory("chai");
    const chaiContract=await chai.deploy();
    // await chaiContract.deployed();

    const addresses=[owner.address,from1.address];

    

    await consoleBalances(addresses);

    const amount={value:ethers.parseEther("1")}

    await chaiContract.connect(from1).chaibuytransfer("from1","first user",amount);
    await chaiContract.connect(from2).chaibuytransfer("from2","second user",amount);
     
    const details=await chaiContract.getdetailsarray();

    console.log("after sending the addres");

    await consoleBalances(addresses);

    console.log("now details are");

     console.log();
     
    await consoledetails(details);

    
// sinesda



}

main()