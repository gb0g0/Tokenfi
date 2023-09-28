import { Discrod, Twitter } from "../assets/icons";

const Footer = () => {
  return (
    <div className="py-5 sm:py-20 gap-12 px-6 sm:px-20 flex sm:flex-row flex-col bg-brand">
      <div className="text-white flex sm:flex-row flex-col gap-5">
        <div class="w-[200px] h-[200px] bg-zinc-300 rounded-[10px]"></div>
        <div className="flex flex-col gap-3">
          <p className="text-white text-4xl font-semibold">Deployer</p>
          <p className="max-w-[400px] text-white text-[32px] font-normal">
            Easy, secure, and optimized token creation with no code.
          </p>
        </div>
      </div>
      <div>
        <div className="text-white text-4xl font-semibold">Lets Connect</div>
        <div className="flex gap-3">
          <Discrod className="p-5"/>
          <Twitter />
        </div>
      </div>
    </div>
  );
};
export default Footer;
