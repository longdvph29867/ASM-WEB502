// type Props = {};

import React, { useState } from "react";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { validateFormSignUp } from "../../Validations/auth";
import axios from "axios";
import { toast } from "react-toastify";
import { hiddenSpinner, showSpinner } from "../../util/util";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormSignUpData>({
    account: "",
    password: "",
    fullName: "",
    phoneNumber: "",
    rePassword: "",
  });
  const [errors, setErrors] = useState<Partial<FormSignUpData> | null>({
    account: "",
    password: "",
    fullName: "",
    phoneNumber: "",
    rePassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateFormSignUp(formData);
    if (validationErrors) {
      setErrors(validationErrors);
    } else {
      showSpinner();
      try {
        const newData = {
          account: formData.account,
          password: formData.password,
          fullName: formData.fullName,
          phoneNumber: formData.phoneNumber,
        };
        const res = await axios.post(
          "https://asm-web-503.vercel.app/auth/register",
          newData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (res) {
          toast.success("Đăng ký thành công!", {
            position: toast.POSITION.TOP_CENTER,
          });
          console.log("q2q");
          navigate("/login");
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
    <div>
      <h3 className=" text-2xl text-slate-700 mb-1">Đăng ký</h3>
      <form onSubmit={handleSubmit} className="flex flex-col text-[#333]">
        <div className="flex flex-col mb-2">
          <label className="text-sm" htmlFor="">
            Tài khoản
          </label>
          <input
            type="text"
            name="account"
            onChange={handleChange}
            value={formData.account}
            className="text-[#666] border border-gray-300 bg-[#f7f7f7] text-base px-2 py-1 outline-none focus:border-slate-500 mt-1 focus:bg-white rounded"
          />
          <small className="text-sm text-red-500">{errors?.account}</small>
        </div>
        <div className="flex flex-col mb-2">
          <label className="text-sm" htmlFor="">
            Họ tên
          </label>
          <input
            type="text"
            name="fullName"
            onChange={handleChange}
            value={formData.fullName}
            className="text-[#666] border border-gray-300 bg-[#f7f7f7] text-base px-2 py-1 outline-none focus:border-slate-500 mt-1 focus:bg-white rounded"
          />
          <small className="text-sm text-red-500">{errors?.fullName}</small>
        </div>
        <div className="flex flex-col mb-2">
          <label className="text-sm" htmlFor="">
            Số điện thoại
          </label>
          <input
            type="text"
            name="phoneNumber"
            onChange={handleChange}
            value={formData.phoneNumber}
            className="text-[#666] border border-gray-300 bg-[#f7f7f7] text-base px-2 py-1 outline-none focus:border-slate-500 mt-1 focus:bg-white rounded"
          />
          <small className="text-sm text-red-500">{errors?.phoneNumber}</small>
        </div>
        <div className="flex flex-col mb-2">
          <label className="text-sm" htmlFor="mat_khau">
            Mật khẩu
          </label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={formData.password}
            className="text-[#666] border-gray-300 bg-[#f7f7f7] text-base px-2 py-1 outline-none focus:border-slate-500 mt-1 focus:bg-white rounded"
            style={{ borderWidth: 1 }}
          />
          <small className="text-sm text-red-500">{errors?.password}</small>
        </div>
        <div className="flex flex-col mb-2">
          <label className="text-sm" htmlFor="">
            Nhập lại mật khẩu
          </label>
          <input
            type="password"
            name="rePassword"
            onChange={handleChange}
            value={formData.rePassword}
            className="text-[#666] border border-gray-300 bg-[#f7f7f7] text-base px-2 py-1 outline-none focus:border-slate-500 mt-1 focus:bg-white rounded"
          />
          <small className="text-sm text-red-500">{errors?.rePassword}</small>
        </div>
        <div className="flex justify-between sm:items-end items-start gap-1  sm:flex-row flex-col">
          <Button>Đăng ký</Button>
          <Link to="/login" className="text-xs text-slate-500">
            Bạn đã có tài khoản?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
