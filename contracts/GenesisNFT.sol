// SPDX-License-Identifier: MIT
pragma solidity >0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract GenesisNFT is ERC721URIStorage, Ownable {
    uint256 public tokenId; //mint될 토큰의 ID를 저장
    event Minted(address indexed recipient, uint256 indexed tokenId, string uri); //Minted 이벤트는 새로운 토큰이 mint될 때 발생시킴. 이 이벤트는 토큰의 수신자, 토큰 ID, 그리고 URI를 logging함.
    constructor() ERC721("GenesisNFT", "GNFT") {}

    function mintNFT(address recipient, string memory uri) external onlyOwner returns (uint256) {
        tokenId++; //tokenId 1씩 증가
        _mint(recipient, tokenId); //새로운 토큰을 생성(mint)
        _setTokenURI(tokenId, uri); //토큰을 생성하고 URI를 설정
        emit Minted(recipient, tokenId, uri);  // 이벤트 발생

        return tokenId;
    }
}
