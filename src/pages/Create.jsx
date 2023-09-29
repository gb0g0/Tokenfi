import CreateHeader from "../components/CreateHeader";
import Process from "../components/Process";
import FormField from "../components/FormField";
import TokenDetails from "../components/TokenDetails";
import Footer from "../components/Footer";

const Create = () => {
  return (
    <div className="font-poppins">
      <CreateHeader />
      <Process />
      <FormField />
      <TokenDetails />
      <Footer />
    </div>
  );
};

export default Create;
