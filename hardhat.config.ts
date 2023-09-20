require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const SEPOLIA_API_URL = "https://eth-sepolia.g.alchemy.com/v2/demo";
const SEPOLIA_PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: SEPOLIA_API_URL,
      accounts: [`0x${SEPOLIA_PRIVATE_KEY}`],
    },
  },
};
