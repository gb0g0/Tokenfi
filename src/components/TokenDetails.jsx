import { useEffect, useState } from "react";
import { deployedTokens, getUserTokens, getAddress } from "../../utils";

const TokenDetails = () => {
  const [userToken, setUserToken] = useState("");
  const [deployedToken, setDeployedToken] = useState("");
  const getTokens = async () => {
    const address = await getAddress();
    console.log(address);
    const numberOfUserToken = await getUserTokens(address);
    setUserToken(numberOfUserToken);
    const numberOfdeployedToken = await deployedTokens();
    setDeployedToken(numberOfdeployedToken);
  };
  useEffect(() => {
    getTokens();
  }, []);

  return (
    <div className="w-full px-10 my-6 sm:px-16">
      <div className="py-5 sm:py-20 gap-8 px-6 sm:px-20 flex flex-col border rounded-[10px] border-black items-center bg-white">
        <div className="text-black sm:text-4xl text-2xl text-center font-bold">
          Your Deployed Tokens
        </div>
        <div className="w-full flex flex-col gap-5">
          <div className="flex gap-4 items-center">
            <div className="text-xl">Total Deployed Tokens:</div>
            <div className="w-10 h-10 bg-brand text-white rounded-[10px] flex items-center justify-center">
              {deployedToken}
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="text-xl">Your Total Deployed Tokens:</div>
            <div className="w-10 h-10 bg-brand text-white rounded-[10px] flex items-center justify-center">
              {userToken}
            </div>
          </div>
        </div>
        <div className="text-xl">{userToken == 0 ? "You have no deployed tokens": ""}</div>
      </div>
    </div>
  );
};
export default TokenDetails;
