//Tina(승은)이 소유한 모든 NFT를 찾아라.
//Tina가 nft의 컨트랙트 주소: 0x3D20616BAacdf51792A0B39642A75fC58e504D58
//Tina의 metamask 지갑 주소: 0x7EE6fAD9Ee306551590E81799C49e576f6e57c8D

const hre = require("hardhat");

async function main() {
  const QUERYTARGET = "여기에 뭐가 들어갈까용?"; // 채워주세요~

  const nftContractAddress = "여기에 뭐가 들어갈까용?"; //채워주세요~

  // Deploy QueryTokens contract
  const QueryTokens = await hre.ethers.getContractFactory("QueryTokens");
  const queryTokens = await QueryTokens.deploy(nftContractAddress);
  await queryTokens.deployed();
  console.log("QueryTokens deployed to:", queryTokens.address);

  // Query tokens of the deployer address
  const tokensOfOwner = await queryTokens.getTokensOfOwner(QUERYTARGET);
  console.log(`Tokens of owner ${QUERYTARGET}: ${tokensOfOwner}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });