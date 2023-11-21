import React, { useEffect, useState } from "react";
import { https } from "../services/config";
import { useLocation } from "react-router-dom";
import ItemProduct from "../components/ItemProduct";
import { hiddenSpinner, showSpinner } from "../util/util";

const ListProductPage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const slugCategory = queryParams.get("category");

  const [productsList, setProductsList] = useState<Product[]>([]);

  const fetchData = async () => {
    showSpinner();
    try {
      const API = slugCategory
        ? `/products?category=${slugCategory}`
        : "/products";
      const { data } = await https.get(API);

      setProductsList(data.data);
      hiddenSpinner();
    } catch (error) {
      console.log(error);
      hiddenSpinner();
    }
  };
  useEffect(() => {
    fetchData();
  }, [slugCategory]);

  return (
    <div className="py-20">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
          Bộ sưu tập quần áo
        </h2>
        <span className="block mt-4 text-neutral-500 text-sm sm:text-base lg:w-1/2">
          Các bộ sưu tập quần áo thời trang mới nhất trong năm 2023 Dạo Phố cực
          đẹp, cao cấp dành cho nam nữ
        </span>
        <hr className="border-slate-200 my-14" />
        <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-10">
          {/*  */}
          <div className="col-span-1 pr-4">
            <div>
              <div className="relative flex flex-col py-8 space-y-4 border-b border-slate-300">
                <h3 className="font-semibold ">Danh mục</h3>
                <div>
                  <div className="flex items-center text-sm sm:text-base mb-4">
                    <input
                      id="Hoodie"
                      className=" rounded w-5 h-5"
                      type="checkbox"
                      name=""
                    />
                    <label htmlFor="Hoodie" className="pl-2.5 sm:pl-3.5">
                      <span className="text-slate-900 text-sm font-normal">
                        Áo Nỉ &amp; Hoodie
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center text-sm sm:text-base mb-4">
                    <input
                      id="Cardigan"
                      className=" rounded w-5 h-5"
                      type="checkbox"
                      name=""
                    />
                    <label htmlFor="Cardigan" className="pl-2.5 sm:pl-3.5">
                      <span className="text-slate-900 text-sm font-normal">
                        Áo Len &amp; Áo Cardigan
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center text-sm sm:text-base mb-4">
                    <input
                      id="Thun"
                      className=" rounded w-5 h-5"
                      type="checkbox"
                      name=""
                    />
                    <label htmlFor="Thun" className="pl-2.5 sm:pl-3.5">
                      <span className="text-slate-900 text-sm font-normal">
                        Áo Thun
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center text-sm sm:text-base mb-4">
                    <input
                      id="coats"
                      className=" rounded w-5 h-5"
                      type="checkbox"
                      name=""
                    />
                    <label htmlFor="coats" className="pl-2.5 sm:pl-3.5">
                      <span className="text-slate-900 text-sm font-normal">
                        Áo Khoác
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center text-sm sm:text-base mb-4">
                    <input
                      id="Polo"
                      className=" rounded w-5 h-5"
                      type="checkbox"
                      name=""
                    />
                    <label htmlFor="Polo" className="pl-2.5 sm:pl-3.5">
                      <span className="text-slate-900 text-sm font-normal">
                        Áo Polo
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col py-8 space-y-4 border-b border-slate-300">
                <h3 className="font-semibold ">Size</h3>
                <div>
                  <div className="flex items-center text-sm sm:text-base mb-4">
                    <input
                      id="sizeS"
                      className=" rounded w-5 h-5"
                      type="checkbox"
                      name=""
                    />
                    <label htmlFor="sizeS" className="pl-2.5 sm:pl-3.5">
                      <span className="text-slate-900 text-sm font-normal">
                        S
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center text-sm sm:text-base mb-4">
                    <input
                      id="sizeM"
                      className=" rounded w-5 h-5"
                      type="checkbox"
                      name=""
                    />
                    <label htmlFor="sizeM" className="pl-2.5 sm:pl-3.5">
                      <span className="text-slate-900 text-sm font-normal">
                        M
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center text-sm sm:text-base mb-4">
                    <input
                      id="sizeL"
                      className=" rounded w-5 h-5"
                      type="checkbox"
                      name=""
                    />
                    <label htmlFor="sizeL" className="pl-2.5 sm:pl-3.5">
                      <span className="text-slate-900 text-sm font-normal">
                        L
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center text-sm sm:text-base mb-4">
                    <input
                      id="sizeXL"
                      className=" rounded w-5 h-5"
                      type="checkbox"
                      name=""
                    />
                    <label htmlFor="sizeXL" className="pl-2.5 sm:pl-3.5">
                      <span className="text-slate-900 text-sm font-normal">
                        XL
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center text-sm sm:text-base mb-4">
                    <input
                      id="size2XL"
                      className=" rounded w-5 h-5"
                      type="checkbox"
                      name=""
                    />
                    <label htmlFor="size2XL" className="pl-2.5 sm:pl-3.5">
                      <span className="text-slate-900 text-sm font-normal">
                        2XL
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col py-8 space-y-4 border-b border-transparent">
                <h3 className="font-semibold ">Màu sắc</h3>
                <div>
                  <div className="flex items-center text-sm sm:text-base mb-4">
                    <input
                      id="sizeS"
                      className=" rounded w-5 h-5"
                      type="checkbox"
                      name=""
                    />
                    <label htmlFor="sizeS" className="pl-2.5 sm:pl-3.5">
                      <span className="text-slate-900 text-sm font-normal">
                        Trắng
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center text-sm sm:text-base mb-4">
                    <input
                      id="red"
                      className=" rounded w-5 h-5"
                      type="checkbox"
                      name=""
                    />
                    <label htmlFor="red" className="pl-2.5 sm:pl-3.5">
                      <span className="text-slate-900 text-sm font-normal">
                        Đỏ
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center text-sm sm:text-base mb-4">
                    <input
                      id="blue"
                      className=" rounded w-5 h-5"
                      type="checkbox"
                      name=""
                    />
                    <label htmlFor="blue" className="pl-2.5 sm:pl-3.5">
                      <span className="text-slate-900 text-sm font-normal">
                        Xanh dương
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center text-sm sm:text-base mb-4">
                    <input
                      id="yellow"
                      className=" rounded w-5 h-5"
                      type="checkbox"
                      name=""
                    />
                    <label htmlFor="yellow" className="pl-2.5 sm:pl-3.5">
                      <span className="text-slate-900 text-sm font-normal">
                        Vàng
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center text-sm sm:text-base mb-4">
                    <input
                      id="pink"
                      className=" rounded w-5 h-5"
                      type="checkbox"
                      name=""
                    />
                    <label htmlFor="pink" className="pl-2.5 sm:pl-3.5">
                      <span className="text-slate-900 text-sm font-normal">
                        Hông
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* list */}
          <div className="lg:col-span-3 md:col-span-2 grid sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-10 ">
            {/* item */}
            {productsList.map((product, index) => (
              <ItemProduct key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProductPage;
