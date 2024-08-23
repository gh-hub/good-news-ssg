import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

type LayoutProps = {
  children: ReactNode;
};

const BasicLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default BasicLayout;
