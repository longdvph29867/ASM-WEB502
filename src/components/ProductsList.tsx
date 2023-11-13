// type Props = {}
import { useEffect, useState } from "react";
import axios from "axios";
import ItemProduct from "./ItemProduct";

const ProductsList = () => {
  const [productsList, setProductsList] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get("https://asm-web-503.vercel.app/products");
    setProductsList(data.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="mt-28">
        <div className="container mx-auto">
          <h2 className=" text-3xl md:text-4xl font-semibold mb-12">
            Sản phẩm mới
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-16 xl:gap-20">
            {productsList.slice(0, 8).map((product, index) => {
              return <ItemProduct product={product} key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
