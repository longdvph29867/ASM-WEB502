import { FC } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

type Props = {
  Component: FC;
};

const Layout = ({ Component }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">{<Component />}</div>
      <Footer />
    </div>
  );
};

export default Layout;
