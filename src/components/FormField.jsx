import { useState, useEffect } from "react";
import { getAddress } from "../../utils";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useContractWrite, useNetwork, useAccount } from "wagmi";
import { contractAddress, abi } from "../../utils/contract";

const Input = ({ labelName, value, handleChange, inputType, placeholder }) => {
  return (
    <label className="flex-1 w-full flex flex-col">
      {labelName && (
        <span className="font-medium text-[14px] leading-[22px] text-white mb-[10px]">
          {labelName}
        </span>
      )}

      <input
        required
        value={value}
        onChange={handleChange}
        type={inputType}
        placeholder={placeholder}
        className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] bg-transparent text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
      />
    </label>
  );
};

const FormField = () => {
  const { address, isConnected } = useAccount();

  const { chain } = useNetwork();
  const tokenfiaddress =
    chain?.id in contractAddress ? contractAddress[chain?.id][0] : null;
  console.log(tokenfiaddress);
  const { data, isLoading, error, write } = useContractWrite({
    address: tokenfiaddress,
    abi: abi,
    functionName: "deployERC20Token",
  });

  function deploy(name, symbol, supply) {
    write({ args: [name, symbol, supply] });
    console.log("called");

    if (data) {
      alert("Token deployed Successfully");
    }

    if (error) {
      alert("Error deploying Token");
      console.log(error);
    }
  }

  const { open } = useWeb3Modal();
  useEffect(() => {}, []);
  const [createTokenForm, setCreateTokenForm] = useState({
    name: "",
    symbol: "",
    supply: "",
  });

  const handleFormFieldChange = (FieldName, e) => {
    setCreateTokenForm({
      ...createTokenForm,
      [FieldName]: e.target.value,
    });
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const name = createTokenForm.name;
    const symbol = createTokenForm.symbol;
    const supply = createTokenForm.supply;
    deploy(name, symbol, supply);
  };
  return (
    <form
      onSubmit={handleFormSubmit}
      className="w-full bg-white px-10 sm:px-28 sm:h-[80vh] my-5 h-[80vh] flex items-center justify-center "
    >
      <div className="bg-brand w-full h-full rounded-[20px] py-5 flex flex-col items-center justify-center px-5 sm:px-28 gap-4">
        <div className="text-center text-white text-3xl font-semibold ">
          Create ERC20 Token
        </div>
        <Input
          labelName={"Token name"}
          handleChange={(e) => handleFormFieldChange("name", e)}
          value={createTokenForm.name}
          inputType={"text"}
        />
        <Input
          labelName={"Token Symbol"}
          handleChange={(e) => handleFormFieldChange("symbol", e)}
          value={createTokenForm.symbol}
          inputType={"text"}
        />
        <Input
          labelName={"Max Supply"}
          handleChange={(e) => handleFormFieldChange("supply", e)}
          value={createTokenForm.supply}
          inputType={"number"}
        />
        {address == null ? (
          <button
            type="button"
            className={`rounded-md sm:p-5 p-4 active:scale-95 transition-all duration-300 bg-white color sm:px-12`}
            onClick={() => open()}
          >
            Connect
          </button>
        ) : (
          <button
            type="submit"
            className={`rounded-md sm:p-5 p-4 active:scale-95 transition-all duration-300 bg-white color sm:px-12`}
          >
            Create Token
          </button>
        )}
      </div>
    </form>
  );
};

export default FormField;
