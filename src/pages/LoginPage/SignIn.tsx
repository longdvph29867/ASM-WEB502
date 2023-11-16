// type Props = {};

import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { useState } from "react";
import axios from "axios";
import { localUserService } from "../../services/localService";
import { toast } from "react-toastify";
import { hiddenSpinner, showSpinner } from "../../util/util";
import { validateFormSignIn } from "../../Validations/auth";

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormSignInData>({
    account: "",
    password: "",
  });
  const [errors, setErrors] = useState<Partial<FormSignInData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateFormSignIn(formData);
    if (Object.keys(validationErrors).length !== 0) {
      setErrors(validationErrors);
    } else {
      try {
        const newData = {
          account: formData.account,
          password: formData.password,
        };
        showSpinner();
        const res = await axios.post(
          "https://asm-web-503.vercel.app/auth/login",
          newData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (res) {
          const infoUser = {
            ...res.data.data,
            accessToken: res.data.accessToken,
          };
          localUserService.set(infoUser);
          hiddenSpinner();
          toast.success("Đăng nhập thành công!", {
            position: toast.POSITION.TOP_CENTER,
          });
          // window.location.href = "/login";
          navigate("/");
        }
      } catch (error) {
        hiddenSpinner();
        console.log(error);
        toast.error(error.response.data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      }
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
          <small className="text-sm text-red-500">{errors.account}</small>
        </div>
        <div className="flex flex-col mb-2">
          <label className="text-sm" htmlFor="">
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
          <small className="text-sm text-red-500">{errors.password}</small>
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
