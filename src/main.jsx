import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
// import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
// import { WagmiConfig } from "wagmi";
// import { zetachainAthensTestnet, localhost, mainnet } from "wagmi/chains";
// 1. Get projectId
const projectId = "5c036caa882e3306871ef7df0eefdfc6";

import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const Nautileus = {
  id: 22222,
  name: "Nautileus",
  network: "Nautileus",
  iconUrl:
    "https://pbs.twimg.com/profile_images/1626750544642727937/qNCwFLUt_400x400.jpg",
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
      url: "https://nautscan.com/mainnet/",
    },
  },
  testnet: false,
};
const NautileusTestnet = {
  id: 88002,
  name: "Nautilus Proteus Testnet",
  network: "Nautilus Proteus Testnet",
  iconUrl:
    "https://pbs.twimg.com/profile_images/1626750544642727937/qNCwFLUt_400x400.jpg",
  nativeCurrency: { name: "Nautchain", symbol: "tBZC", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://api.proteus.nautchain.xyz/solana"],
    },
    public: {
      http: ["https://api.proteus.nautchain.xyz/solana"],
    },
  },
  blockExplorers: {
    default: {
      name: "Nautscan",
      url: "https://proteus.nautscan.com/",
    },
  },
  testnet: false,
};

const EngramTestnet = {
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

const { chains, publicClient } = configureChains(
  [Nautileus, EngramTestnet, NautileusTestnet],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Tokenfi Network",
  projectId: projectId,
  chains,
});
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

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
      <RainbowKitProvider
        chains={chains}
        theme={lightTheme({
          accentColor: "#260e0e",
          accentColorForeground: "white",
          borderRadius: "medium",
        })}
        coolMode
      >
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);
