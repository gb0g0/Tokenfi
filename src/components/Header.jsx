import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { LogoWhite } from "../assets/icons";
const Header = () => {
  const [toogleMenu, setToogleMenu] = useState(false);
  return (
    <div className="w-full relative">
      <div className="w-full flex justify-between bg-brand items-center py-3 px-5 sm:px-10">
        <Link to="/">
          <LogoWhite />
        </Link>
        <div className="sm:flex hidden gap-5 font-medium">
          <Link to="/create">
            <button
              className={`rounded-md p-2 active:scale-95 transition-all duration-300 bg-white color px-3`}
            >
              Launch Crypto
            </button>
          </Link>
          <button
            className={`rounded-md p-2 active:scale-95 transition-all border-white border-2 duration-300 bg-brand text-white px-3`}
          >
            Join Telegram
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
        </div>
      </div>
      <div>
        {toogleMenu && (
          <div
            className={`text-white bg-brand relative z-10 transition-all grid duration-300 ${
              toogleMenu ? "grid-rows-[1fr] p-3" : "grid-rows-[0fr]"
            } `}
          >
            <div className="flex flex-col gap-5 font-medium items-center justify-center py-6 min-h-0 transition-all duration-300 ">
              <Link to="/create">
                <button
                  className={`rounded-md p-4 active:scale-95 transition-all duration-300 bg-white color px-12`}
                >
                  Launch Crypto
                </button>
              </Link>
              <Link to="https://t.me/tokenfyhq">
                <button
                  className={`rounded-md p-4 active:scale-95 transition-all border-white border-2 duration-300 bg-brand text-white px-4`}
                >
                  Join Telegram
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
