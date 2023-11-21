import { useEffect, useState } from "react";
import ItemProduct from "./ItemProduct";
import { hiddenSpinner, showSpinner } from "../util/util";
import { https } from "../services/config";
type Props = {
  gender?: string;
};

const ProductsList: React.FC<Props> = ({ gender }) => {
  const [productsList, setProductsList] = useState<Product[]>([]);

  const fetchData = async () => {
    try {
      showSpinner();
      const API = gender ? `/products?gender=${gender}` : `/products`;
      const { data } = await https.get(API);
      hiddenSpinner();
      setProductsList(data.data);
    } catch (error) {
      hiddenSpinner();
      console.log(error);
    }
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
