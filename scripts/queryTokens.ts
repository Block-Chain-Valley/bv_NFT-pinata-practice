//Tina(승은)이 소유한 모든 NFT의 tokenId를 찾아라.
//Tina가 nft의 컨트랙트 주소: 0x3D20616BAacdf51792A0B39642A75fC58e504D58
//Tina의 metamask 지갑 주소: 0x7EE6fAD9Ee306551590E81799C49e576f6e57c8D

async function querymain() {
  const QUERYTARGET = "여기에 뭐가 들어갈까용?"; /////// 채워주세요~

  const nftContractAddress = "여기에 뭐가 들어갈까용?"; /////// 채워주세요~

  // QueryTokens contract 배포
  const QueryTokens = await hre.ethers.getContractFactory("QueryTokens");
  const queryTokens = await QueryTokens.deploy(nftContractAddress);
  await queryTokens.deployed();
  console.log("QueryTokens deployed to:", queryTokens.address);

  // QUERYTARGET가 nftContractAddress에서 소유하고 있는 모든 tokenId query.
  const tokensOfOwner = await queryTokens.getTokensOfOwner(QUERYTARGET); //여기서 contracts/QueryTokens.sol의 함수 getTokensOfOwner가 사용됩니다.
  console.log(`Tokens of owner ${QUERYTARGET}: ${tokensOfOwner}`);
}

querymain()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
