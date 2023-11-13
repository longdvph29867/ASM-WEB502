// type Props = {}

import Banner from "../components/Banner";
import Banner2 from "../components/Banner2";
import HowItWork from "../components/HowItWork";
import ProductsList from "../components/ProductsList";

const HomePage = () => {
  return (
    <div className="">
      <Banner />
      <HowItWork />
      <ProductsList />
      <Banner2 />
    </div>
  );
};

export default HomePage;
