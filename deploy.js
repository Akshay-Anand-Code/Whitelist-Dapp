//Imorting ethers from hardhat package
const {ethers} = require("hardhat");


async function main() {
   
  const whitelistContract = await ethers.getContractFactory("Whitelist");
       
  //deploying the contract with .deploy method and passing 10 in the constructor
  const deployedWhitelistContract = await whitelistContract.deploy(10);
       
  console.log("Whitelist contract address:", deployedWhitelistContract.address);
  
}

main().then(() => process.exit(0))
.catch((err) => {
  console.error(err);
  process.exit(1);
});