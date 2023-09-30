import HeroBg from "../../public/hero-bg.jpeg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="min-h-[90vh] hero-bg flex w-full flex-col items-center justify-center px-5 sm:px-[8rem] gap-6">
      <h2 className="sm:text-4xl font-medium">Say hello to Tokenfy!</h2>
      <h1 className="sm:text-4xl text-xl text-center font-semibold">
        Now you can easily launch Web3 tokens for your communities, projects,
        and company on our Ethereum-compatible chains, all while rewarding your
        users and customers.
      </h1>
      <div className="flex flex-col gap-5 sm:flex-row items-center">
        <Link to="/create">
          <button
            className={`rounded-md p-3 active:scale-95 transition-all duration-300 text-white bg-brand px-5 font-semibold`}
          >
            Visit our launcher
          </button>
        </Link>
        <Link to={"https://t.me/tokenfyhq"}>
          <button
            className={`rounded-md p-3 active:scale-95 transition-all border-[#260E0E] border-2 duration-300 color font-semibold bg-white px-4`}
          >
            Join Telegram
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
