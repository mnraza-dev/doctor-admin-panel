import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MessagesSquareIcon } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import Sidebar from "./Sidebar";
import Content from "./Content";

const Layout = ({ children }) => {
    const [open, setOpen] = useState(true);
  

  return (
    <>
      <div className="bg-[#E9E7EF] min-h-screen ">
        <Sidebar open={open} setOpen={setOpen}/>
        <Content  children={children} open={open} setOpen={setOpen}/>
       
      </div>
    </>
  );
};

export default Layout;
