import { Link } from "react-router-dom";
import logo from "../assets/images/amazon.png";
import flag from "../assets/images/india.svg";
import Search from "./Search";
import Location from "./Location";
import Cart from "./Cart";
import Account from "./Accounts";
import Orders from "./Orders";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaCaretDown } from "react-icons/fa";

const Header = () => {
  return (
    <header className="min-w-[1000px]">
      <div className="flex h-[60px] items-center bg-AmazonClone-navbar justify-around">
        <Link to="/">
          <img
            className="w-[110px] h-auto m-2 p-[4px] rounded-sm hover:border-2"
            src={logo}
            alt="logo"
          />
        </Link>

        <Location />
        <Search />

        <div className="flex text-white space-x-2 p-2 rounded-sm hover:border-2">
          <img src={flag} alt="" className="w-5" />
          <div className="flex items-center">
            <p className="font-bold">EN</p>
            <FaCaretDown />
          </div>
        </div>

        <Account />
        <Orders />
        <Cart />
      </div>

      <div className="flex bg-AmazonClone-light_blue text-white items-center px-2 space-x-5 text-xs xl:text-sm p-2 pl-6">
        <p className="flex items-center space-x-2 justify-between font-bold">
          <RxHamburgerMenu size={24} />
          <span>All</span>
        </p>
        <p>Fresh</p>
        <p>Amazon miniTV</p>
        <p>Sell</p>
        <p>Best Sellers</p>
        <p>Mobiles</p>
        <p>Today&apos;s Deals</p>
        <p>Mobiles</p>
        <p>Electronics</p>
        <p>Customer Service</p>
      </div>
    </header>
  );
};

export default Header;
