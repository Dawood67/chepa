import { erc1155Abi, erc1155Address } from "../utility/contract/erc115Abi";
import Web3 from "web3";
import { CommonUtility } from "utility";

class ERC1155 {
  // <<<<--- READ FUNCTIONS --->>>>
  async isApprovedForAll(
    web3: Web3,
    ownerAddress: string,
    operatorAddress: string
  ) {
    try {
      const contract = CommonUtility.contract(web3, erc1155Abi, erc1155Address);
      const isApproved: boolean = await contract.methods
        .isApprovedForAll(ownerAddress, operatorAddress)
        .call();
      return isApproved;
    } catch (error) {
      console.log("Error in isApprovedForAll func", error);
      return error;
    }
  }
  async uri(web3: Web3, tokenId: number) {
    try {
      const contract = CommonUtility.contract(web3, erc1155Abi, erc1155Address);

      const uri = await contract.methods.uri(tokenId).call();
      return uri;
    } catch (error) {
      console.log("Error in uri func", error);
      return error;
    }
  }

  async tokenBalance(web3: Web3, account: string, tokenId: number) {
    try {
      const contract = CommonUtility.contract(web3, erc1155Abi, erc1155Address);

      const balance = +(await contract.methods
        .balanceOf(account, tokenId)
        .call());
      return balance;
    } catch (error) {
      console.log("error in tokenBalance func", error);
      return error;
    }
  }

  async owner(web3: Web3) {
    try {
      const contract = CommonUtility.contract(web3, erc1155Abi, erc1155Address);

      const owner = contract.methods.owner().call();
      return owner;
    } catch (error) {
      console.log("Error in owner func", error);
      return error;
    }
  }

  async balance(web3: Web3, account: string, tokenId: number) {
    try {
      const contract = CommonUtility.contract(web3, erc1155Abi, erc1155Address);

      const balance = await contract.methods.balanceOf(account, tokenId).call();
      return +balance;
    } catch (error) {
      console.log("error in balance func", error);
      return error;
    }
  }

  async balanceOfBatch(web3: Web3, accounts: string[], tokenIds: number[]) {
    try {
      const contract = CommonUtility.contract(web3, erc1155Abi, erc1155Address);

      const balanceBatch = await contract.methods
        .balanceOfBatch(accounts, tokenIds)
        .call();
      return +balanceBatch;
    } catch (error) {
      console.log("Error in balanceOfBatch func", error);
    }
  }

  async name(web3: Web3) {
    try {
      const contract = CommonUtility.contract(web3, erc1155Abi, erc1155Address);

      const name = await contract.methods.name().call();
      return name;
    } catch (error) {
      console.log("Error in name func", error);
      return error;
    }
  }

  async symbol(web3: Web3) {
    try {
      const contract = CommonUtility.contract(web3, erc1155Abi, erc1155Address);

      const symbol = await contract.methods.symbol().call();
      return symbol;
    } catch (error) {
      console.log("Error in symbol func", error);
      return error;
    }
  }

  async totalSupply(web3: Web3) {
    try {
      const contract = CommonUtility.contract(web3, erc1155Abi, erc1155Address);

      const totalSupply = await contract.methods.totalSupply().call();
      return +totalSupply;
    } catch (error) {
      console.log("error in totalSupply func", error);
      return error;
    }
  }

  //   <<<<--- WRITE FUNCTIONS ---->>>>
  async setApprovalForAll(
    web3: Web3,
    operatorAddress: string,
    approved: boolean,
    account: string
  ) {
    try {
      const contract = CommonUtility.contract(web3, erc1155Abi, erc1155Address);

      const receipt = await contract.methods
        .setApprovalForAll(operatorAddress, approved)
        .send({ from: account });
      return receipt;
    } catch (error) {
      console.log("Error in approve func", error);
      return error;
    }
  }

  async safeBatchTransferFrom(
    web3: Web3,
    senderAddress: string,
    recipientAddress: string,
    tokenIds: number[],
    amounts: number[],
    account: string
  ) {
    try {
      const contract = CommonUtility.contract(web3, erc1155Abi, erc1155Address);

      const receipt = await contract.methods
        .safeBatchTransferFrom(
          senderAddress,
          recipientAddress,
          tokenIds,
          amounts
        )
        .send({ from: account });
      return receipt;
    } catch (error) {
      console.log("Error in transfer func", error);
      return error;
    }
  }

  async safeTransferFrom(
    web3: Web3,
    spenderAddress: string,
    recipientAddress: string,
    tokenId: number,
    account: string,
    amount: number
  ) {
    try {
      const contract = CommonUtility.contract(web3, erc1155Abi, erc1155Address);

      const receipt = await contract.methods
        .safeTransferFrom(spenderAddress, recipientAddress, tokenId, amount)
        .send({ from: account });
      return receipt;
    } catch (error) {
      console.log("Error in transfer func", error);
      return error;
    }
  }

  async setUri(web3: Web3, uri: string, account: string) {
    try {
      const contract = CommonUtility.contract(web3, erc1155Abi, erc1155Address);

      const receipt = await contract.methods
        ._setUri(uri)
        .send({ from: account });
      return receipt;
    } catch (error) {
      console.log("Error in setUri func", error);
      return error;
    }
  }

  async mint(
    web3: Web3,
    to: string,
    account: string,
    tokenId: number,
    amount: number
  ) {
    try {
      const contract = CommonUtility.contract(web3, erc1155Abi, erc1155Address);

      const receipt = await contract.methods
        ._mint(to, tokenId, amount)
        .send({ from: account });
      return receipt;
    } catch (error) {
      console.log("Error in _mint func", error);
      return error;
    }
  }

  async mintBatch(
    web3: Web3,
    tokenIds: number[],
    amounts: number[],
    account: string,
    to: string
  ) {
    try {
      const contract = CommonUtility.contract(web3, erc1155Abi, erc1155Address);

      const receipt = await contract.methods
        ._mintBatch(to, tokenIds, amounts)
        .send({ from: account });
      return receipt;
    } catch (error) {
      console.log("Error in _mintBatch func", error);
    }
  }
}

const ERC1155Service = new ERC1155();
Object.freeze(ERC1155Service);
export { ERC1155Service };
