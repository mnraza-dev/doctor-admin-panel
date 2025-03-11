import React from "react";
import { useState } from "react";
import Logo from "/images/logo-body.png";
import AdminLogoAvatar from "/images/admin.png";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <div className="bg-[#E9E7EF] min-h-screen">
        <aside
          style={{
            width: open ? "300px" : "0px",
            transition: "width 0.25s ease-in-out",
          }}
          className="bg-white h-full fixed top-0 left-0"
        >
          <div className="p-8 flex items-center justify-center">
            <img src={Logo} className="mb-2" alt="Logo" />
          </div>
          <div className="flex items-center justify-center gap-4 ">
            <img
              src={AdminLogoAvatar}
              className="rounded-full shadow"
              alt="Logo Avatar"
            />
            <h1 className="text-xl font-semibold">Super Admin</h1>
          </div>

          <div className="p-4">
            <button
              onClick={() => console.log("Dashboard")}
              className={
                "flex w-full items-center gap-4 p-2 text-green-900 rounded-md hover:bg-green-900 hover:text-white"
              }
            >
              <i class="ri-dashboard-3-line text-2xl"></i>
              <span className="text-xl">Dashboard</span>
            </button>

            <button
              onClick={() => console.log("Device")}
              className={
                "flex w-full items-center gap-4 p-2 text-green-900 rounded-md hover:bg-green-900 hover:text-white"
              }
            >
              <i class="ri-macbook-line text-2xl"></i>
              <span className="text-xl">Device</span>
            </button>
            <button
              onClick={() => console.log("Doctor")}
              className={
                "flex w-full items-center gap-4 p-2 text-green-900 rounded-md hover:bg-green-900 hover:text-white"
              }
            >
              <i class="ri-nurse-fill text-2xl"></i>
              <span className="text-xl">Doctor</span>
            </button>
            <button
              onClick={() => console.log("Patient")}
              className={
                "flex w-full items-center gap-4 p-2 text-green-900 rounded-md hover:bg-green-900 hover:text-white"
              }
            >
              <i class="ri-hotel-bed-fill text-2xl"></i>
              <span className="text-xl">Patient</span>
            </button>
          </div>
        </aside>
        <section
          style={{
            marginLeft: open ? "300px" : "0px",
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
