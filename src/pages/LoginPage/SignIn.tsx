// type Props = {};

import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { useState } from "react";
import axios from "axios";
type FormData = {
  account: string;
  password: string;
  fullName: string;
  phoneNumber: string;
  rePassword: string;
};
const SignIn = () => {
  const [formData, setFormData] = useState<FormData>({
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
        window.location.href = "/login";
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col justify-center h-full">
      <h3 className=" text-2xl text-slate-700 mb-1">Đăng nhập</h3>
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
          <small className="text-sm text-red-500" />
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
          <small className="text-sm text-red-500" />
        </div>
        <div className="flex justify-between sm:items-end items-start gap-1  sm:flex-row flex-col">
          <Button>Đăng nhập</Button>
          <Link to="/singup" className="text-xs text-slate-500">
            Bạn chưa có tài khoản?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
