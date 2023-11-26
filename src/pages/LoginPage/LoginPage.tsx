type Props = {
  action: string;
};
import imgBg from "../../assets/img/bg-login1.jpg";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import imgBgForm from "../../assets/img/bg-form-login.jpeg";

const LoginPage = ({ action }: Props) => {
  return (
    <div
      className={`w-screen h-screen flex items-center justify-center bg-gray-400 px-5 
    bg-cover
    bg-center
    relative
    `}
      style={{ backgroundImage: `url(${imgBg})` }}
    >
      <div className="bg-white rounded-xl md:max-w-3xl w-full max-w-md max-h-screen z-10 overflow-scroll">
        <div className=" grid md:grid-cols-2 gap-5">
          <div className=" p-5 md:pr-0">
            {action === "login" ? <SignIn /> : <SignUp />}
          </div>
          <div
            className="bg-cover bg-center min-h-[458px] md:block hidden"
            style={{ backgroundImage: `url(${imgBgForm})` }}
          ></div>
        </div>
      </div>
      <div
        className="
  absolute
  w-full
  h-full
  left-0
  top-0
  bg-black/50
  "
      ></div>
    </div>
  );
};

export default LoginPage;
