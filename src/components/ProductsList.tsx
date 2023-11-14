type Props = {
  gender?: string;
};
import { useEffect, useState } from "react";
import axios from "axios";
import ItemProduct from "./ItemProduct";

const ProductsList = ({ gender }: Props) => {
  const [productsList, setProductsList] = useState([]);
  console.log(
    "🚀 ~ file: ProductsList.tsx:10 ~ ProductsList ~ productsList:",
    productsList
  );
  const fetchData = async () => {
    const API = gender
      ? `https://asm-web-503.vercel.app/products?gender=${gender}`
      : `https://asm-web-503.vercel.app/products`;
    const { data } = await axios.get(API);
    console.log("🚀 ~ file: ProductsList.tsx:12 ~ fetchData ~ API:", API);
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
            {!gender
              ? "Sản phẩm mới"
              : gender === "male"
              ? "Dành cho nam"
              : "Dành cho nữ"}
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
