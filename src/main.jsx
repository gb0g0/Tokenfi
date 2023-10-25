import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";

import { WagmiConfig } from "wagmi";
import { zetachainAthensTestnet, localhost, mainnet } from "wagmi/chains";
// 1. Get projectId
const projectId = "5c036caa882e3306871ef7df0eefdfc6";

export const Nautileus = {
  id: 22222,
  name: "Nautileus",
  network: "Nautileus",
  nativeCurrency: { name: "Nautchain", symbol: "BZC", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://api.nautilus.nautchain.xyz"],
    },
    public: {
      http: ["https://api.nautilus.nautchain.xyz"],
    },
  },
  blockExplorers: {
    default: {
      name: "Nautileus Explorer",
      url: "",
    },
  },
  testnet: true,
};

export const EngramTestnet = {
  id: 130,
  name: "Engram Testnet",
  network: "Engram Testnet",
  iconUrl: "https://scan.engram.tech/assets/network_icon.svg",
  nativeCurrency: {
    name: "Engram Tokio Testnet",
    symbol: "TGRAM",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://engram.tech/testnet"],
    },
    public: {
      http: ["https://engram.tech/testnet"],
    },
  },
  blockExplorers: {
    default: {
      name: "Engram Explorer",
      url: "https://scan.engram.tech/",
    },
  },
  testnet: true,
};

// 2. Create wagmiConfig
const metadata = {
  // name: "Web3Modal",
  // description: "Web3Modal Example",
  // url: "https://web3modal.com",
  // icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [Nautileus, EngramTestnet];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
  defaultChain: EngramTestnet,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <App />
    </WagmiConfig>
  </React.StrictMode>
);
