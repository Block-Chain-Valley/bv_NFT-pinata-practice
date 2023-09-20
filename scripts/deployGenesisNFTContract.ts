const hre = require("hardhat");

async function deploymain() {
  const GenesisNFT = await hre.ethers.getContractFactory("GenesisNFT");
  const genesisNFT = await GenesisNFT.deploy();
  await genesisNFT.deployed();
  console.log("GenesisNFT deployed to:", genesisNFT.address);
}

deploymain()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
