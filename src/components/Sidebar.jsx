import React from "react";
import Menu from "./Menu";
import Logo from "/images/logo-body.png";
import AdminLogoAvatar from "/images/admin.png";

const Sidebar = ({ open, setOpen }) => {
  return (
    <div>
      <aside
        style={{
          width: open ? "300px" : "80px",
          transition: "0.3s ease-in-out",
        }}
        className="bg-white h-full fixed top-0 left-0 overflow-hidden"
      >
        <div className="p-8 flex items-center justify-center">
          {open && <img src={Logo} alt="Logo" className="w-40" />}{" "}
        </div>
        <div className="flex items-center justify-center gap-4 ">
          <img
            src={AdminLogoAvatar}
            className="rounded-full shadow"
            alt="Logo Avatar"
          />
          {open && <h1 className="text-xl font-semibold">Super Admin</h1>}
        </div>
        {/* Menu in Sidebar */}
        <Menu />
      </aside>
    </div>
  );
};

export default Sidebar;
