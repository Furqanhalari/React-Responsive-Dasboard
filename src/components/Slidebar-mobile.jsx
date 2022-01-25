import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { FiAlignJustify } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const SlidebarMobile = () => {
  const [click, setClick] = useState(false);

  const clickHandler = () => {
      setClick(true)
  }
  return (
    <div className="slidebar_mobile">
      <button onClick={clickHandler}>{click ? <FiAlignJustify /> : <AiOutlineClose />}</button>
    </div>
  );
};

export default SlidebarMobile;
