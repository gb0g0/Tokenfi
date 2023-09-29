import HeroBg from "../../public/hero-bg.jpeg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="min-h-[90vh] hero-bg flex w-full flex-col items-center justify-center px-5 sm:px-[8rem] gap-6">
      <h2 className="sm:text-4xl font-medium">Say Hello,</h2>
      <h1 className="sm:text-4xl text-xl text-center font-semibold">
        Tokenfy launcher is readily available to help businesses, communities,
        organizations and companies create and launch web3 tokens on our
        self-integrated Ethereum-compatible chains while rewarding their users.
      </h1>
      <div className="flex flex-col gap-5 sm:flex-row items-center">
        <Link to="/create">
          <button
            className={`rounded-md p-3 active:scale-95 transition-all duration-300 text-white bg-brand px-5 font-semibold`}
          >
            Visit our launcher
          </button>
        </Link>
        <button
          className={`rounded-md p-3 active:scale-95 transition-all border-[#260E0E] border-2 duration-300 color font-semibold bg-white px-4`}
        >
          Join Telegram
        </button>
      </div>
    </div>
  );
};

export default Hero;
