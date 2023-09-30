/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config()
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const API_KEY = process.env.API_KEY;
const ETHERSCAN_KEY = process.env.ETHERSCAN_KEY;
module.exports = {
    solidity: {
        version: "0.8.8"
    },
    networks: {
        goerli: {
            url: `https://eth-goerli.g.alchemy.com/v2/${API_KEY}`,
            accounts: [`0x${PRIVATE_KEY}`]
        }
    },
    etherscan: {
        apiKey: ETHERSCAN_KEY
    }
};
