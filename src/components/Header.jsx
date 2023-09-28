import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
const Header = () => {
  const [toogleMenu, setToogleMenu] = useState(false);
  return (
    <div className="w-full flex justify-between bg-brand items-center py-3 px-5 sm:px-10">
      <div className="text-white">Logo</div>
      <div className="sm:flex hidden gap-5 font-medium">
      <Link to="/create">
        <button
          className={`rounded-md p-2 active:scale-95 transition-all duration-300 bg-white color px-3`}
        >
          Create Tokens
        </button>
      </Link>
        <button
          className={`rounded-md p-2 active:scale-95 transition-all border-white border-2 duration-300 bg-brand text-white px-3`}
        >
          Download Whitepaper
        </button>
      </div>
      <div className="flex sm:hidden relative">
        {toogleMenu ? (
          <RxCross2
            fontSize={40}
            className="cursor-pointer text-white md:hidden flex z-20"
            onClick={() => setToogleMenu(false)}
          />
        ) : (
          <HiMenuAlt3
            fontSize={40}
            className="cursor-pointer md:hidden text-white z-20"
            onClick={() => setToogleMenu(true)}
          />
        )}
        {toogleMenu&& (
            <div></div>
        )}
        </div>
    </div>
  );
};

export default Header;
