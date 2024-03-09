// eslint-disable-next-line no-unused-vars
import React from "react";
import logo from "../assets/images/amazon.png";

const Footer = () => {
  return (
    <footer className="bg-AmazonClone-footer text-white min-w-[1000px] max-w-[1500px] m-auto">
      <div className="flex justify-center gap-20 py-10">
        <div className="">
          <p className="font-bold">Get to Know Us</p>
          <div className="text-sm">
            <p className="pt-2">About us</p>
            <p className="pt-2">Careers</p>
            <p className="pt-2">Press Releases</p>
            <p className="pt-2">Amazon Science</p>
          </div>
        </div>
        <div className="">
          <p className="font-bold">Connect With Us</p>
          <div className="text-sm">
            <p className="pt-2">Facebook</p>
            <p className="pt-2">Twitter</p>
            <p className="pt-2">Instagram</p>
          </div>
        </div>
        <div className="">
          <p className="font-bold">Make Money with Us</p>
          <div className="text-sm">
            <p className="pt-2">Sell on Amazon</p>
            <p className="pt-2">Sell under Amazon Accelerator</p>
            <p className="pt-2">Protect and Build Your Brand</p>
            <p className="pt-2">Amazon Global Selling</p>
            <p className="pt-2">Become an Affiliate</p>
            <p className="pt-2">Fulfilment by Amazon</p>
            <p className="pt-2">Advertise Your Products</p>
            <p className="pt-2">Amazon Pay on Merchants</p>
          </div>
        </div>
        <div>
          <p className="font-bold">Let Us Help You</p>
          <div className="text-sm">
            <p className="pt-2">COVID-19 and Amazon</p>
            <p className="pt-2">Your Account</p>
            <p className="pt-2">Returns Centre</p>
            <p className="pt-2">100% Purchase Protection</p>
            <p className="pt-2">Amazon App Download</p>
            <p className="pt-2">Help</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="py-10">
        <img src={logo} alt="" className="w-[90px] m-auto pb-3" />
        <div className="flex flex-wrap w-[900px] m-auto justify-center gap-4 text-xs font-semibolds">
          <p className="hover:underline">Australia</p>
          <p className="hover:underline">Brazil</p>
          <p className="hover:underline">Canada</p>
          <p className="hover:underline">China</p>
          <p className="hover:underline">France</p>
          <p className="hover:underline">Germany </p>
          <p className="hover:underline">Italy</p>
          <p className="hover:underline">Japan</p>
          <p className="hover:underline">Mexico</p>
          <p className="hover:underline">Netherlands</p>
          <p className="hover:underline">Poland</p>
          <p className="hover:underline">Singapore</p>
          <p className="hover:underline">Spain</p>
          <p className="hover:underline">Turkey</p>
          <p className="hover:underline">United Arab Emirates</p>
          <p className="hover:underline">United Kingdom </p>
          <p className="hover:underline"> United States</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
