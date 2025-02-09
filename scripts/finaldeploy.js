



async function main() {

  const chai=await ethers.getContractFactory("chai");
  const chaiContract=await chai.deploy();
  // await chaiContract.deployed();
  await chaiContract.waitForDeployment();
   
  console.log("✅ Contract deployed at:", await chaiContract.getAddress());
   
  }

  main().catch((error)=>{
     console.error(error);
     process.exitCode=1;
  });