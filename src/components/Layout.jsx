import React from "react";
import { useState } from "react";

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
        ></aside>
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
