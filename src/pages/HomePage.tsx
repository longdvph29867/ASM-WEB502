// type Props = {}

import Banner from "../components/Banner";
import Banner2 from "../components/Banner2";
import HowItWork from "../components/HowItWork";
import ProductsList from "../components/ProductsList";

const HomePage = () => {
  return (
    <div className="mb-10">
      <Banner />
      <HowItWork />
      <ProductsList />
      <Banner2 />
      <ProductsList gender="female" />
      <ProductsList gender="male" />
    </div>
  );
};

export default HomePage;
