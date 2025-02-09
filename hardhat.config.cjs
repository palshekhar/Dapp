

require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();
require("@nomicfoundation/hardhat-ignition-ethers");



const {INFURA_PROJECT_ID,PRIVATE_KEY}=process.env;
module.exports = {
  solidity: "0.8.9",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [`${PRIVATE_KEY}`],
      }
  }

};
