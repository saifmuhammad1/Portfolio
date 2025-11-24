import React, { ReactNode } from "react";
import Navbar from "./navbar";
import { Footer } from "./footer";

interface ILayout {
  children: ReactNode;
}
const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Navbar />

      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
