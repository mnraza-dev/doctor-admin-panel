import { MessagesSquareIcon } from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { useState } from "react";

const Content = ({ open, setOpen , children}) => {
    const [isLanguageSwitchOpen, setIsLanguageSwitchOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("en");
  const location = useLocation();
  return (
    <>
      <section
        style={{
          marginLeft: open ? "300px" : "80px",
          transition: "0.3s ease-in-out",
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
              <i class="ri-global-line"></i> Go to Website
            </Link>
          </div>
          <div>
            <Link
              to="/chat"
              className="px-2 py-2 hover:text-green-900 flex items-center gap-2"
            >
              <MessagesSquareIcon /> Chat with Us
            </Link>
          </div>
          <div>
            <LanguageSwitcher
              isLanguageSwitchOpen={isLanguageSwitchOpen}
              setIsLanguageSwitchOpen={setIsLanguageSwitchOpen}
              selectedLanguage={selectedLanguage}
              setSelectedLanguage={setSelectedLanguage}
            />
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
    </>
  );
};

export default Content;
