import { Link } from "react-router-dom";
import { LogoWhite } from "../assets/icons";
const CreateHeader = () => {
  return (
    <div className="w-full flex justify-between bg-brand items-center py-3 px-5 sm:px-10">
      <Link to="/">
        <LogoWhite />
      </Link>
      <div className="sm:flex  gap-5 font-medium">
        <button
          className={`rounded-md p-2 active:scale-95 transition-all border-white border-2 duration-300 bg-brand text-white px-7`}
        >
          Connect
        </button>
        {/* <w3m-button /> */}

      </div>
    </div>
  );
};
export default CreateHeader;
