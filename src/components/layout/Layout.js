import React from "react";
import Footer from "./Footer";
import MainNav from "./MainNav";

function Layout(props) {
  return (
    <div>
      <MainNav />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
