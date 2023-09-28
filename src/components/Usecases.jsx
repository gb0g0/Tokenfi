const Cases = ({ title, subtitle, img }) => {
  return (
    <div className="text-white flex flex-col gap-4 ">
      <p className="text-2xl font-medium">{title}</p>
      <div className="flex gap-5">
        <div className="min-w-[84px] h-[84px] bg-white "></div>
        <p className="sm:text-lg font-normal">{subtitle}</p>
      </div>
    </div>
  );
};

const Usecases = () => {
  return (
    <div className="w-full bg-brand py-6 px-6 sm:px-20 flex sm:flex-row flex-col items-center justify-center gap-5">
      <div className=" w-full h-full flex basis-1/2 p-5">
        <div className="bg-white w-[500px] sm:h-[566px] h-[250px] max-w-[500px] max-h-[566px]"></div>
      </div>
      <div className="flex basis-1/2 gap-4 flex-col">
        <p className="text-yellow-400 text-2xl font-bold">Use case</p>
        <p className="text-white text-4xl font-bold">
          Discover SmartDeployer's Top Use Cases
        </p>
        <Cases
          title={"Business Tokenization"}
          subtitle={
            "Create Custom Tokens For Businesses, Such As Loyalty Tokens, Rewards Tokens, Or Utility Tokens"
          }
        />
        <Cases
          title={"Gaming"}
          subtitle={
            "Create Tokens For Gaming Applications, Such As In-Game Currencies, Items, Or Collectibles."
          }
        />
        <Cases
          title={"Crowdfunding"}
          subtitle={
            "Create Tokens For Crowdfunding Campaigns, Allowing Backers To Receive Tokens In Exchange For Their Support."
          }
        />
      </div>
    </div>
  );
};

export default Usecases;
