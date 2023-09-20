const hre = require("hardhat"); //Hardhat 런타임 환경 (HRE)을 가져옴

async function deploymain() {
  const GenesisNFT = await hre.ethers.getContractFactory("GenesisNFT"); //"GenesisNFT"라는 이름의 스마트 컨트랙트 팩토리를 가져옴
  const genesisNFT = await GenesisNFT.deploy(); //스마트 컨트랙트를 배포하고, 그 인스턴스를 genesisNFT 변수에 저장
  await genesisNFT.deployed(); //배포가 완료될 때까지 기다림
  console.log("GenesisNFT deployed to:", genesisNFT.address);
}

deploymain()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
