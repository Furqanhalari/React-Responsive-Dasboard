import React, { useState, useEffect } from "react";
import { FiShoppingBag, FiSettings } from "react-icons/fi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { GiSchoolBag } from "react-icons/gi";
import { IoWalletOutline } from "react-icons/io5";
import { RiTruckLine } from "react-icons/ri";
import { BiHelpCircle } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import rocket from "../assets/rocket.png";
import Links from "./Links";
import { FiAlignJustify } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const Sidebar = () => {
  const [click, setClick] = useState(false);
  const [mobileView, setIsMobileView] = useState(window.innerWidth < 768 ? true : false);

  const clickHandler = () => {
    setClick(!click);
  };


  const links1 = [
    {
      text: "Overview",
      icon: FiShoppingBag,
      active: true,
    },
    {
      text: "Orders",
      icon: HiOutlineShoppingCart,
    },
    {
      text: "Customers",
      icon: GiSchoolBag,
    },
    {
      text: "Transactions",
      icon: IoWalletOutline,
    },
    {
      text: "Shipment",
      icon: RiTruckLine,
    },
  ];

  const links2 = [
    {
      text: "Help Center",
      icon: BiHelpCircle,
    },
    {
      text: "Settings",
      icon: FiSettings,
    },
    {
      text: "Logout",
      icon: MdLogout,
    },
  ];

  return (
    <>
      {mobileView ? (
        <div className="hamburger">
          <div className="links">
            <a onClick={clickHandler}>
              {click ? <AiOutlineClose /> : <FiAlignJustify />}
            </a>
            <a onClick={clickHandler}>
              {click ? <Links links={links1} /> : ""}
              {click ? <Links links={links2} /> : ""}
            </a>
          </div>
        </div>
      ) : (
        <div className="sidebar">
          <div className="brand">ShopQuality</div>

          <div className="links">
            <Links links={links1} />
            <Links links={links2} />
          </div>
          <div className="pro">
            <div className="image">
              <img src={rocket} alt="" />
            </div>
            <h3>ShopQuality Pro</h3>
            <h5>Get access to all features on ShopQuality</h5>
            <button>Get Pro</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
