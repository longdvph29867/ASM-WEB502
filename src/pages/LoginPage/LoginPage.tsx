type Props = {
  action: string;
};
import imgBg from "../../assets/img/bg-login1.jpg";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

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
      <div className="p-5 bg-white rounded-xl w-96 max-w-full max-h-screen z-10">
        {action === "login" ? <SignIn /> : <SignUp />}
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
