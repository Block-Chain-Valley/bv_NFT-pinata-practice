const { ethers } = require("hardhat");

async function mintmain() {
  const [owner] = await ethers.getSigners();
  const GenesisNFT = await ethers.getContractFactory("GenesisNFT");
  const genesisNFT = GenesisNFT.attach("Your_Contract_Address_Here");

  const tx = await genesisNFT
    .connect(owner)
    .mintNFT(
      owner.address,
      "ipfs://여기에는 genesis-metada를 pinata에 올렸을때 얻은 CID 입력"
    );
  await tx.wait();
  console.log(`NFT minted with tokenId: ${tx.events[0].args.tokenId}`);
}

mintmain()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
