import { Discrod, Twitter, Logo } from "../assets/icons";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="py-5 sm:py-20 sm:gap-48 gap-10 px-6 sm:px-20 flex sm:flex-row flex-col bg-brand">
      <div className="text-white flex sm:flex-row flex-col gap-8 basis-1/2">
        {/* <div class="w-[150px] h-[150px] bg-zinc-300 rounded-[10px]"></div> */}
        <Logo />
        <div className="flex flex-col gap-3">
          <p className="text-white sm:text-4xl text-2xl font-semibold">
            TOKENFI LAUNCHER
          </p>
          <p className="max-w-[300px] text-white sm:text-2xl text-base font-normal">
            Secure, customizable, and optimizable.
          </p>
        </div>
      </div>
      <div>
        <div className="text-white sm:text-4xl text-2xl text-start font-semibold">
          Lets Connect
        </div>
        <div className="flex gap-3">
          {/* <Link to="https://t.me/+VHsB-m7LFgk1ZGY0">
            <Discrod />
          </Link> */}
          <Link to="https://twitter.com/tokenfinetwork">
            <Twitter />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
