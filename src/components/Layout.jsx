import React from "react";
import { useState } from "react";
import Logo from "/images/logo-body.png";
import AdminLogoAvatar from "/images/admin.png";
import { Link, useLocation } from "react-router-dom";
import { MessagesSquareIcon } from "lucide-react";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(true);
  const location = useLocation();

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
                <i
                  class={`${menu.icon} ${!open ? "text-4xl" : "text-2xl"}`}
                ></i>
                {open && <span>{menu.name}</span>}{" "}
              </Link>
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
                className="mr-4 cursor-pointer hover:bg-gray-100 w-10 h-10 rounded-full "
              >
                <i class="ri-menu-3-line"></i>
              </button>
              
               
                <Link className="px-2 py-2 hover:text-green-900 " to={"/"}>
                <i class="ri-global-line"></i>  Go to Website
                </Link>
              
            </div>
            <div>
            
           <Link to="/chat" className="px-2 py-2 hover:text-green-900 flex items-center gap-2"> <MessagesSquareIcon /> Chat with Us</Link>


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
