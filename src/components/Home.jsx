import React from "react";
import "animate.css";
import "remixicon/fonts/remixicon.css";

import Layout from "./Layout";
const Home = () => {
  return (
    <Layout>
      <div className="bg-[#E9E7EF] min-h-screen">
        <aside
          style={{
            padding: "20px",
            width: "300px",
          }}
          className="bg-white h-full fixed top-0 left-0 p-2"
        ></aside>
        <section
          style={{
            marginLeft: "300px",
            // padding: "20px",
          }}
        >
          <nav className="bg-white p-6 shadow-sm flex justify-between">
            <div>
              <button
                onClick={() => console.log("click")}
                className=" cursor-pointer hover:bg-gray-100 w-10 h-10 rounded-full "
              >
                <i class="ri-menu-3-line"></i>
              </button>
            </div>
            <div>
              <h1>Two</h1>
            </div>
          </nav>
          <h1 className="text-5xl font-bold px-4">Doctor Admin Panel</h1>
          <h1 className="text-3xl font-bold px-4">Welcome</h1>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
