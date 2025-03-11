import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
const languages = [
  { code: "en", name: "English", flag: "https://flagcdn.com/w40/us.png" },
  { code: "fr", name: "Français", flag: "https://flagcdn.com/w40/fr.png" },
  { code: "es", name: "Español", flag: "https://flagcdn.com/w40/es.png" },
  { code: "de", name: "Deutsch", flag: "https://flagcdn.com/w40/de.png" },
  { code: "ar", name: "العربية", flag: "https://flagcdn.com/w40/sa.png" },
];

const LanguageSwitcher = ({ setIsLanguageSwitchOpen, isLanguageSwitchOpen, selectedLanguage, setSelectedLanguage }) => {
  const selectedLang = languages.find(lang => lang.code === selectedLanguage) || languages[0];

  const changeLanguage = (code) => {
    setSelectedLanguage(code);
    setIsLanguageSwitchOpen(false);
  };

  return (
    <div className="relative w-40">
      <button
        onClick={() => setIsLanguageSwitchOpen(!isLanguageSwitchOpen)}
        className="w-full flex items-center justify-between bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm cursor-pointer"
      >
        <div className="flex items-center gap-2">
          <img src={selectedLang.flag} alt={selectedLang.name} className="w-5 h-5 rounded-full" />
          {selectedLang.name}
        </div>
        <ChevronDown className="w-4 h-4" />
      </button>

      {isLanguageSwitchOpen && (
        <div className="absolute left-0 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-md z-10">
          {languages.map(lang => (
            <div
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
            >
              <img src={lang.flag} alt={lang.name} className="w-5 h-5 rounded-full" />
              {lang.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
