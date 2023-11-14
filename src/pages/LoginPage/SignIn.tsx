// type Props = {};

import Button from "../../components/Button";

const SignIn = () => {
  return (
    <div>
      <h3 className=" text-2xl text-slate-700">Đăng nhập</h3>
      <div className="min-h-[16px]"></div>
      <form
        action="?ctl=login-khachhang"
        method="post"
        className="flex flex-col text-[#333]"
        id="form-login"
      >
        <div className="flex flex-col mb-2">
          <label htmlFor="ma_kh">Tài khoản</label>
          <input
            type="text"
            name="ma_kh"
            id="ma_kh"
            defaultValue="123..."
            className="text-[#666] border-gray-300 bg-[#f7f7f7] text-base px-2 py-2 outline-none focus:border-slate-500 mt-1 focus:bg-white rounded"
            style={{ borderWidth: 1 }}
          />
          <small className="text-sm text-red-500" />
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="mat_khau">Mật khẩu</label>
          <input
            type="password"
            name="mat_khau"
            id="mat_khau"
            defaultValue="123..."
            className="text-[#666] border-gray-300 bg-[#f7f7f7] text-base px-2 py-2 outline-none focus:border-slate-500 mt-1 focus:bg-white rounded"
            style={{ borderWidth: 1 }}
          />
          <small className="text-sm text-red-500" />
        </div>
        <div className="flex flex-col mb-2">
          <label>
            <input type="checkbox" name="ghi_nho" /> Ghi nhớ tài khoản?
          </label>
        </div>
        <div className="flex justify-between sm:items-end items-start gap-1  sm:flex-row flex-col">
          <Button>Đăng nhập</Button>
          <a href="?ctl=register" className="text-xs text-slate-500">
            Bạn chưa có tài khoản?
          </a>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
