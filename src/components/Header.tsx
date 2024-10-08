import { Link, Outlet } from "react-router-dom";
import Mainpage from "./Mainpage";
import { TiThMenu } from "react-icons/ti";
import { useState } from "react";
import Footer from "./Footer";
import { UserAuth } from "../context/AuthContext";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const { user }: any = UserAuth();

  // show menu
  const showMenu = () => {
    return setMenu(!menu);
  };

  //

  ////////////////////////
  return (
    <div>
      <div className="flex justify-between px-4 py-8 bg-[#EF5A6F] text-3xl px-8 text-[#D4BDAC]">
        <div>
          <Link to={user ? "/pizza-store/menu" : "/pizza-store/"}>
            <h1>Home</h1>
          </Link>
        </div>
        <div
          onClick={showMenu}
          className="cursor-pointer absolute right-6 top-10 md:hidden"
        >
          <TiThMenu />
        </div>

        <div>
          {!menu ? (
            <div
              className={`bg-[#EF5A6F] text-xl  text-[#D4BDAC]  space-x-8 invisible md:visible `}
            >
              <Link to={"/pizza-store/signup"}>Sign Up</Link>
              <Link to={"/pizza-store/signin"}>Sign In</Link>
              <Link to={"/pizza-store/menu"}>Menu</Link>
              <Link to={"/pizza-store/details"}>Details</Link>
              <Link to={"/pizza-store/cart"}>Cart</Link>
            </div>
          ) : null}
        </div>
      </div>

      {menu ? (
        <div
          className={`bg-[#EF5A6F] text-xl space-y-2 pb-8 text-[#D4BDAC] grid place-content-center md:flex md:space-y-0 md:justify-evenly`}
        >
          <Link to={"/pizza-store/signup"}>Sign Up</Link>
          <Link to={"/pizza-store/signin"}>Sign In</Link>
          <Link to={"/pizza-store/menu"}>Menu</Link>
          <Link to={"/pizza-store/details"}>Details</Link>
          <Link to={"/pizza-store/cart"}>Cart</Link>
        </div>
      ) : null}
      <Outlet />
      <Mainpage />
      <Footer />
    </div>
  );
};

export default Header;
