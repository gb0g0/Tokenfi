import { Link } from "react-router-dom";
import { LogoWhite, NautilusChain } from "../assets/icons";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { getAddress } from "../../utils";
import { useEffect, useState } from "react";

const CreateHeader = () => {
  const { open } = useWeb3Modal();
  const [address, setAddress] = useState();
  const useAddress = async () => {
    setAddress(await getAddress());
  };
  useEffect(() => {
    useAddress();
  }, []);
  return (
    <div className="w-full flex justify-between bg-brand items-center py-3 px-5 sm:px-10">
      <Link to="/">
        <LogoWhite />
      </Link>
      <div className="flex items-center justify-center gap-2 font-medium">
        <button
          className={`rounded-full w-12 active:scale-95 transition-all border-white border-2 duration-300 bg-brand text-white`}
          onClick={() => open({ view: "Networks" })}
        >
          <img
            // src="https://pbs.twimg.com/profile_images/1626225438849929218/h_HtSU1a_400x400.jpg"
            src={
              "https://ipfs.io/ipfs/QmafK1JDWBNtBwtKQQWbTQjQBQvev2jhWR86dK5n1ZgEKo"
            }
            className="rounded-full"
            alt=""
          />
        </button>
        <button
          className={`rounded-md p-2 active:scale-95 transition-all border-white border-2 duration-300 bg-brand text-white px-7`}
          onClick={() => open()}
        >
          {address == null ? "Connect" : "Connected"}
        </button>
        {/* <w3m-button /> */}
      </div>
    </div>
  );
};
export default CreateHeader;
