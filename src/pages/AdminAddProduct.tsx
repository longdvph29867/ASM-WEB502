// type Props = {};

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { hiddenSpinner, showSpinner } from "../util/util";
import Button from "../components/Button";
import { ApiUrls } from "../constant/constant";
import { validateProduct } from "../Validations/product";

const AddProduct = () => {
  const navigate = useNavigate();
  const [categoriesList, setCategoriesList] = useState<Category[]>([]);

  const [formData, setFormData] = useState<FormProductData>({
    name: "",
    desc: "",
    images: "",
    price: 0,
    gender: "",
    id_category: "",
  });

  const [errors, setErrors] = useState<ValidProduct>({});

  const fetchCategoryes = async () => {
    const categories = await axios.get(`${ApiUrls.API_URL}/categories`);
    setCategoriesList(categories.data.data);
  };
  useEffect(() => {
    fetchCategoryes();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateProduct(formData);
    if (Object.keys(validationErrors).length !== 0) {
      setErrors(validationErrors);
    } else {
      showSpinner();
      try {
        const newData = {
          name: formData.name,
          desc: formData.desc,
          images: [formData.images],
          price: formData.price,
          gender: formData.gender,
          id_category: formData.id_category,
        };

        const res = await axios.post(`${ApiUrls.API_URL}/products`, newData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res) {
          toast.success("Thêm sản phẩm thành công!", {
            position: toast.POSITION.TOP_CENTER,
          });
          navigate("/admin/products");
          hiddenSpinner();
        }
      } catch (error) {
        hiddenSpinner();
        toast.error(error.response.data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
        console.log(error);
      }
    }
  };

  return (
    <div className="max-w-lg w-full mx-auto px-5 pb-5">
      <h3 className=" text-2xl text-slate-700 text-center mt-6 mb-3">
        Thêm mới
      </h3>
      <form onSubmit={handleSubmit} className="flex flex-col text-[#333]">
        <div className="flex flex-col mb-2">
          <label className="text-sm" htmlFor="">
            Tên sản phẩm
          </label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
            className="text-[#666] border border-gray-300 bg-[#f7f7f7] text-base px-2 py-1 outline-none focus:border-slate-500 mt-1 focus:bg-white rounded"
          />
          <small className="text-sm text-red-500">{errors?.name}</small>
        </div>
        <div className="flex flex-col mb-2">
          <label className="text-sm" htmlFor="">
            Giá sản phẩm
          </label>
          <input
            type="number"
            name="price"
            onChange={handleChange}
            value={formData.price}
            className="text-[#666] border border-gray-300 bg-[#f7f7f7] text-base px-2 py-1 outline-none focus:border-slate-500 mt-1 focus:bg-white rounded"
          />
          <small className="text-sm text-red-500">{errors?.price}</small>
        </div>
        <div className="flex flex-col mb-2">
          <label className="text-sm" htmlFor="">
            Hình ảnh
          </label>
          <input
            type="text"
            name="images"
            onChange={handleChange}
            value={formData.images}
            className="text-[#666] border border-gray-300 bg-[#f7f7f7] text-base px-2 py-1 outline-none focus:border-slate-500 mt-1 focus:bg-white rounded"
          />
          <small className="text-sm text-red-500">{errors?.images}</small>
        </div>
        <div className="flex flex-col mb-2">
          <label className="text-sm" htmlFor="">
            Mô tả
          </label>
          <textarea
            name="desc"
            onChange={handleChange}
            defaultValue={formData.desc}
            rows={3}
            className="text-[#666] border border-gray-300 bg-[#f7f7f7] text-base px-2 py-1 outline-none focus:border-slate-500 mt-1 focus:bg-white rounded"
          ></textarea>
          <small className="text-sm text-red-500">{errors?.desc}</small>
        </div>
        <div className="flex flex-col mb-2">
          <label className="text-sm" htmlFor="">
            Giới tính
          </label>
          <div className="text-[#666] text-base px-2 py-1 outline-none mt-1 rounded grid grid-cols-4 gap-4">
            <label className="cursor-pointer">
              <input
                onChange={handleChange}
                type="radio"
                name="gender"
                value="male"
                className="mr-3"
                checked={formData.gender === "male"}
              />
              Nam
            </label>
            <label className="cursor-pointer">
              <input
                onChange={handleChange}
                type="radio"
                name="gender"
                value="female"
                className="mr-3"
                checked={formData.gender === "female"}
              />
              Nữ
            </label>
          </div>
          <small className="text-sm text-red-500">{errors?.gender}</small>
        </div>
        <div className="flex flex-col mb-2">
          <label className="text-sm" htmlFor="">
            Danh mục
          </label>
          <div>
            <select
              onChange={handleChange}
              name="id_category"
              className="text-[#666] border border-gray-300 bg-[#f7f7f7] text-base px-2 py-1 outline-none focus:border-slate-500 mt-1 focus:bg-white rounded w-full"
            >
              <option value="">--- Chọn ---</option>
              {categoriesList.map(({ _id, categoryName }, index) => (
                <option
                  key={index}
                  value={_id}
                  defaultChecked={formData.id_category === _id}
                >
                  {categoryName}
                </option>
              ))}
            </select>
            <small className="text-sm text-red-500">
              {errors?.id_category}
            </small>
          </div>
        </div>
        <div className="flex justify-between sm:items-end items-start gap-1  sm:flex-row flex-col">
          <Button>Thêm mới</Button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
