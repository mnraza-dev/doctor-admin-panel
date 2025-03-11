import React from "react";
import { useState } from "react";
import Logo from "/images/logo-body.png";
import AdminLogoAvatar from "/images/admin.png";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(true);
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
    {
      name: "User",
      icon: "ri-user-3-line",
      path: "/user",
    },

    // "ri-macbook-line text-2xl"
  ];
  return (
    <>
      <div className="bg-[#E9E7EF] min-h-screen ">
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

          <div className={`${open ? "p-4" : "mt-4 p-2"}`}>
            {menus.map((menu) => (
              <button
                onClick={() => console.log(menu.name)}
                className={`flex items-center gap-4 w-full  cursor-pointer text-green-900 ${
                  open ? "rounded-md p-3" : "rounded-full  p-3"
                } hover:bg-green-900 hover:text-white`}
              >
                <i
                  class={`${menu.icon} ${!open ? "text-4xl" : "text-2xl"}`}
                ></i>
                {open && <span>{menu.name}</span>}{" "}
              </button>
            ))}
          </div>
        </aside>
        <section
          style={{
            marginLeft: open ? "300px" : "80px",
            transition: "0.3s ease-in-out",
            // padding: "20px",
          }}
        >
          <nav className="bg-white p-6 shadow-sm flex justify-between">
            <div>
              <button
                onClick={() => setOpen(!open)}
                className=" cursor-pointer hover:bg-gray-100 w-10 h-10 rounded-full "
              >
                <i class="ri-menu-3-line"></i>
              </button>
            </div>
            <div>
              <h1>Two</h1>
            </div>
          </nav>
          <main className="p-6">
            <h1 className="text-5xl font-bold ">Doctor Admin Panel</h1>
            {children}
          </main>

          <footer className="bg-white p-6 rounded-md m-6 ">
            <div className="flex items-center mx-auto w-fit">
              <i className="i-copyright-line"></i>
              <p>DevDeepDives | All Rights Reserved 2025</p>
            </div>
          </footer>
        </section>
      </div>
    </>
  );
};

export default Layout;
