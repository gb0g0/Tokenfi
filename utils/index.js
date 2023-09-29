import { useState, useEffect } from "react";
import { contractAddress, abi } from "./contract";
import { ethers } from "ethers";

const getContract = async () => {
  if (window.ethereum) {
    const chainId = parseInt(window.ethereum.chainId);
    const address =
      chainId in contractAddress ? contractAddress[chainId][0] : null;
    console.log(address);
    const provider = new ethers.BrowserProvider(window.ethereum); // A connection to the Ethereum network
    const signer = await provider.getSigner(); // Holds your private key and can sign things
    const Contract = new ethers.Contract(address, abi, signer);
    return Contract;
  } else {
    alert("No wallet detected");
  }
};

export async function getAddress() {
  if (typeof window.ethereum !== "undefined") {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      const address = accounts[0];
      return address;
    } catch (error) {
      console.error("Error connecting to wallet:", error);
      throw error;
    }
  } else {
    console.error(
      "Ethereum wallet not found. Please install MetaMask or another Ethereum wallet extension."
    );
    return null;
  }
}

export async function deploy(name, symbol, supply) {
  try {
    const contract = await getContract();
    return await contract.deployERC20Token(name, symbol, supply);
  } catch (error) {
    alert("Error deploying Token");
    console.log(error);
  }
}
export async function getUserTokens(address) {
  try {
    const contract = await getContract();
    return await contract.GetUserTokens(address);
  } catch (error) {
    console.log(error);
    return "0";
  }
}
export async function deployedTokens() {
  try {
    const contract = await getContract();
    return await contract.deployedTokens();
  } catch (error) {
    console.log(error);
    return "0";
  }
}
