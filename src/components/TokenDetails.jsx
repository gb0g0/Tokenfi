import { useEffect, useState } from "react";
// import { deployedTokens, getUserTokens, getAddress } from "../../utils";
import { contractAddress, abi } from "../../utils/contract";
import {
  useContractWrite,
  useNetwork,
  useAccount,
  useContractRead,
} from "wagmi";

const TokenDetails = () => {
  const [userToken, setUserToken] = useState("");
  const [deployedToken, setDeployedToken] = useState("");
  const { address, isConnected } = useAccount();

  const { chain } = useNetwork();
  const tokenfiaddress =
    chain?.id in contractAddress ? contractAddress[chain?.id][0] : null;
  const { data, isLoading, error, write } = useContractWrite({
    address: tokenfiaddress,
    abi: abi,
    functionName: "deployedTokens",
  });

  // const
  // const getTokens = async () => {
  // const address = await getAddress();
  // console.log(address);
  // const numberOfUserToken = await getUserTokens(address);
  // setUserToken(numberOfUserToken);
  // const numberOfdeployedToken = await deployedTokens();
  // setDeployedToken(numberOfdeployedToken);
  // console.log(userToken);
  // };
  useEffect(() => {
    console.log(write({ args: [""] }));
  }, []);

  return (
    <div className="w-full px-10 my-6 sm:px-16">
      <div className="py-5 sm:py-20 gap-8 px-6 sm:px-20 flex flex-col border rounded-[10px] border-black items-center bg-white">
        <div className="text-black sm:text-4xl text-2xl text-center font-bold">
          YOUR LAUNCHED TOKENS
        </div>
        <div className="w-full flex flex-col gap-5">
          <div className="flex gap-4 items-center">
            <div className="text-xl">Total Launched Tokens:</div>
            <div className="w-10 h-10 bg-brand text-white rounded-[10px] flex items-center justify-center">
              {deployedToken.toString()}
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="text-xl">Your Total Launched Tokens:</div>
            <div className="w-10 h-10 bg-brand text-white rounded-[10px] flex items-center justify-center">
              {userToken.length}
            </div>
          </div>
        </div>
        <div className="text-xl">
          {userToken == 0 ? "You have no Launched tokens" : ""}
        </div>
      </div>
    </div>
  );
};
export default TokenDetails;
