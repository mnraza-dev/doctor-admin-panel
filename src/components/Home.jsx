import React from "react";
import Layout from "./Layout";
const Home = () => {
  return (
    <Layout>
      <div className="bg-[#E9E7EF] min-h-screen">
        <aside
          style={{
            width: "300px",
          }}
          className="bg-white h-full fixed top-0 left-0 p-2"
        >
          <h1 className="text-3xl font-bold">Sidebar</h1>
        </aside>
        <section>
          <h1 className="text-5xl font-bold"></h1>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
