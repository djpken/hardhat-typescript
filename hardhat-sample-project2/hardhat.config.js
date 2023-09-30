/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("dotenv").config()
const ALCHEMY_URL = process.env.ALCHEMY_URL;

module.exports = {
  solidity: "0.8.8",
  networks:{
    hardhat: {
        forking:{
          url: ALCHEMY_URL,
          blockNumber: 4043801
        }
    }
  }
};
