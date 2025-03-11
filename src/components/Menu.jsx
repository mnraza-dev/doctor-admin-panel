
import React,{ useState } from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  const menus = [
    {
      name: "Dashboard",
      icon: "ri-dashboard-3-line",
      path: "/dashboard",
    },
    {
      name: "Device",
      icon: "ri-macbook-line text-2xl",
      path: "/device",
    },
    {
      name: "Patient",
      icon: "ri-hotel-bed-fill",
      path: "/patient",
    },
    {
      name: "Doctor",
      icon: "ri-nurse-fill",
      path: "/doctor",
    },
  ];
  const [isLanguageSwitchOpen, setIsLanguageSwitchOpen] = useState(false);

  return (
    <div className={`${open ? "p-4" : "mt-4 p-2"}`}>
      {menus.map((menu) => (
        <Link
          to={menu.path}
          className={`flex items-center gap-4 w-full mb-1 cursor-pointer text-green-900 ${
            open ? "rounded-md p-3" : "rounded-full  p-3"
          } hover:bg-green-900 hover:text-white`}
          style={{
            color: location.pathname === menu.path ? "white" : "",
            backgroundColor:
              location.pathname === menu.path
                ? "oklch(0.393 0.095 152.535)"
                : "",
          }}
        >
          <i class={`${menu.icon} ${!open ? "text-4xl" : "text-2xl"}`}></i>
          {open && <span>{menu.name}</span>}{" "}
        </Link>
      ))}
    </div>
  );
};

export default Menu;
