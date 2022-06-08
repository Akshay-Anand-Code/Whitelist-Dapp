

require("dotenv").config({path: ".env.example"});


require("@nomiclabs/hardhat-waffle");

const INFURA_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;
const  RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: { 
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/c55c8c7152544a048dc4e54d00713369",
      accounts: [RINKEBY_PRIVATE_KEY],
    },
  },
};