import axios from "axios";
import { useEffect, useState } from "react";
import { ApiUrls } from "../constant/constant";
import { formartCurrency, hiddenSpinner, showSpinner } from "../util/util";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const AdminProductsList: React.FC = () => {
  const [porudctsList, setPorudctsList] = useState<Product[]>([]);

  const fetchData = async () => {
    showSpinner();
    try {
      const { data } = await axios.get(`${ApiUrls.API_URL}/products`);
      setPorudctsList(data.data);
      hiddenSpinner();
    } catch (error) {
      hiddenSpinner();
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id: string) => {
    if (confirm("Bạn có chắc chắn xoá không!")) {
      try {
        const data = await axios.delete(`${ApiUrls.API_URL}/products/${id}`);
        console.log(
          "🚀 ~ file: AdminProductsList.tsx:32 ~ handleDelete ~ data:",
          data
        );

        if (data) {
          toast.success(data.data.messgae, {
            position: toast.POSITION.TOP_CENTER,
          });
          fetchData();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="">
      <div className="p-4 pb-0 mb-0 bg-white rounded-t-2xl">
        <Link
          to="/admin/products/add"
          className="text-white text-base font-semibold bg-green-500 py-2 px-2 rounded my-5"
        >
          <span>Thêm mới</span>
        </Link>
      </div>
      <div className="h-full overflow-x-auto">
        <div className="w-full border-gray-200 text-slate-500">
          <div className="w-full grid lg:grid-cols-8 sm:grid-cols-5 grid-cols-2 gap-2">
            <div className="pr-6 pl-4 py-3  text-left font-bold uppercase text-slate-800">
              Ảnh
            </div>
            <div className="sm:col-span-2 pr-6 pl-4 py-3  text-left font-bold uppercase text-slate-800">
              Tên sản phẩm
            </div>
            <div className="lg:block hidden col-span-3 pr-6 pl-2 py-3  text-left font-bold uppercase text-slate-800">
              Mô tả
            </div>
            <div className="sm:block hidden pr-6 pl-2 py-3  text-left font-bold uppercase text-slate-800">
              Giá
            </div>
            <div className="sm:block hidden pr-6 pl-2 py-3  text-left font-bold uppercase text-slate-800">
              Thao tác
            </div>
          </div>
          <div>
            {porudctsList.map((product, index) => {
              return (
                <div
                  key={index}
                  className="grid lg:grid-cols-8 sm:grid-cols-5 grid-cols-2 gap-2 border-b sm:border-transparent border-slate-300"
                >
                  <div className="p-2">
                    <div className="px-2 py-1 min-w-[110px]">
                      <div>
                        <img
                          src={product.images[0]}
                          className="mr-4 h-20 w-20 rounded"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="p-2 sm:col-span-2">
                    <div className="flex flex-col justify-center">
                      <h6 className="text-base">{product.name}</h6>
                      <p className="text-sm text-slate-400">
                        {product.gender === "male" ? "Nam" : "Nữ"}
                      </p>
                    </div>
                  </div>
                  <div className="lg:block hidden p-2 col-span-3">
                    <p className="text-sm ">{product.desc.slice(0, 150)}...</p>
                  </div>
                  <div className="p-2">
                    <span className="text-sm font-semibold text-slate-400">
                      {formartCurrency(product.price)}
                    </span>
                  </div>
                  <div className="p-2 space-x-2">
                    <a
                      href="#"
                      className="text-sm font-semibold text-yellow-500"
                    >
                      Sửa
                    </a>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="text-sm font-semibold text-red-500"
                    >
                      Xoá
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProductsList;
