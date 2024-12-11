import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const languages = [
  { label: "English", value: "en" },
  { label: "Bahasa Indonesia", value: "id" },
  { label: "Deutsch", value: "de" },
  { label: "Español", value: "es" },
  { label: "Français", value: "fr" },
  { label: "Italiano", value: "it" },
  { label: "Nederlands", value: "nl" },
  { label: "Polski", value: "pl" },
  { label: "Português", value: "pt" },
  { label: "Română", value: "ro" },
  { label: "Svenska", value: "sv" },
];

const currencies = [
  { label: "USD", value: "usd" },
  { label: "EUR", value: "eur" },
  { label: "GBP", value: "gbp" },
  { label: "JPY", value: "jpy" },
  { label: "INR", value: "inr" },
];

const LanguageCurrencyDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");
  const [selectedCurrency, setSelectedCurrency] = useState<string>("usd");

  return (
    <div className="p-4 bg-white shadow-xl w-72 rounded-xl border-2">
      {/* Language Dropdown */}
      <div className="mb-4">
        <label
          htmlFor="language"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Language
        </label>
        <div className="relative">
          <select
            id="language"
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="block w-full rounded-md border-2 bg-white py-2 pl-3 pr-8 text-sm focus:border-black focus:ring-1 focus:ring-black hover:border-black shadow-sm appearance-none"
          >
            {languages.map((lang) => (
              <option key={lang.value} value={lang.value}>
                {lang.label}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <MdKeyboardArrowDown />
          </div>
        </div>
      </div>

      {/* Currency Dropdown */}
      <div>
        <label
          htmlFor="currency"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Currency
        </label>
        <div className="relative">
          <select
            id="currency"
            value={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value)}
            className="block w-full rounded-md border-2 bg-white py-2 pl-3 pr-8 text-sm focus:border-black focus:ring-1 focus:ring-black hover:border-black shadow-sm appearance-none"
          >
            {currencies.map((currency) => (
              <option key={currency.value} value={currency.value}>
                {currency.label}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <MdKeyboardArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageCurrencyDropdown;
