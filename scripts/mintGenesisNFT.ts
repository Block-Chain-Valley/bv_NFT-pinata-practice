import { ethers } from "ethers";
const hre = require("hardhat");
import * as dotenv from "dotenv";

dotenv.config();

async function mintmain() {
  const provider = hre.ethers.provider; // Hardhat's built-in provider
  const privateKey = process.env.SEPOLIA_PRIVATE_KEY as string; // 환경 변수의 타입을 명시적으로 지정(typescript라서..)
  const currentGasPrice = await provider.getGasPrice();
  if (!privateKey) {
    console.error(
      "SEPOLIA_PRIVATE_KEY is not set in the environment variables."
    );
    return;
  }

  const wallet = new hre.ethers.Wallet(privateKey, provider); // 연결된 프로바이더 추가

  const GenesisNFT = await hre.ethers.getContractFactory("GenesisNFT");
  const genesisNFT = GenesisNFT.attach(
    "deployGenesisNFTContract.ts를_통해서_배포된_컨트랙트_주소" /////채워주세요~
  );
  try {
    const tx = await genesisNFT.connect(wallet).mintNFT(
      wallet.address,
      "ipfs://여기에는_genesis-metada를_pinata에_올렸을때_얻은_CID_입력", /////채워주세요~
      {
        gasPrice: currentGasPrice.add(ethers.utils.parseUnits("1", "gwei")),
      }
    );
    const receipt = await tx.wait();
    const mintEvent = receipt.events?.find((e: any) => e.event === "Minted");
    const tokenId = mintEvent?.args?.tokenId;

    if (tokenId !== undefined) {
      console.log(`NFT minted with tokenId: ${tokenId}`);
    } else {
      console.log("NFT minted, but tokenId is unknown");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

mintmain()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
