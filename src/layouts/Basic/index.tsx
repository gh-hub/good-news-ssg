import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Heebo } from "next/font/google";

const heebo = Heebo({ subsets: ["hebrew"] });
type LayoutProps = {
  children: ReactNode;
};

const BasicLayout = ({ children }: LayoutProps) => {
  return (
    <div
      // className={`flex min-h-screen flex-col items-center justify-between`}
      // className="flex min-h-screen flex-col justify-between items-center"
      className={heebo.className}
    >
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default BasicLayout;
