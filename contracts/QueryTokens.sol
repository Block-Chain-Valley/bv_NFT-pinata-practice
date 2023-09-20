//Tina(승은)이 소유한 모든 NFT의 tokenId를 찾아라.
//Tina가 nft의 컨트랙트 주소: 0x3D20616BAacdf51792A0B39642A75fC58e504D58
//Tina의 metamask 지갑 주소: 0x7EE6fAD9Ee306551590E81799C49e576f6e57c8D

// SPDX-License-Identifier: MIT
pragma solidity >0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol";

contract QueryTokens {
    IERC721Enumerable public nftContract; // IERC721Enumerable 인터페이스를 사용하여 nftContract 변수를 선언

    constructor(address _nftContract) {
        nftContract = IERC721Enumerable(_nftContract); // 컨트랙트가 배포될 때, ERC721 토큰 컨트랙트의 주소를 인자로 받아 nftContract 변수에 저장
    }

    // owner가 소유한 모든 NFT의 tokenID를 반환하는 함수
    function getTokensOfOwner(address owner) public view returns (uint256[] memory) {
       //여기를 구현해보세요!
       /// Hint ///
       // tokenOfOwnerByIndex(address owner, uint256 index): owner 주소가 소유한 NFT 중 index 에 위치하는 NFT의 tokenId반환. 
       // balanceOf()함수와 함께 사용하면 주소가 소유한 모든 NFT들의 tokenID를 찾을 수 있음. 
       // balanceOf(address owner) : owner 주소가 가지고 있는 총 NFT 개수 반환
        
    }
}


//** 아래는 두 함수의 정의 **//
// function balanceOf(address _owner) external view returns (uint);
// function tokenOfOwnerByIndex(address owner, uint256 index) external view returns (uint256);