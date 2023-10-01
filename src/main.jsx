import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";

import { WagmiConfig } from "wagmi";
import {
  zetachainAthensTestnet,
  nautileus,
  localhost,
  mainnet,
} from "wagmi/chains";
// 1. Get projectId
const projectId = "5c036caa882e3306871ef7df0eefdfc6";

// 2. Create wagmiConfig
const metadata = {
  // name: "Web3Modal",
  // description: "Web3Modal Example",
  // url: "https://web3modal.com",
  // icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [localhost];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
  defaultChain: localhost,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <App />
    </WagmiConfig>
  </React.StrictMode>
);
