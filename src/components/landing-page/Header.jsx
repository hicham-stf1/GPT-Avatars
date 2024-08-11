import React, { useState } from "react";
import logo from '../../assets/images/logo.png'
const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <header className="py-4 md:py-6">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a
              href="#"
              title=""
              className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              <img
                className="w-auto h-14"
                src={logo}
                alt=""
              />
            </a>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="text-gray-900"
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
            >
              {expanded ? (
                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

        

          <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10">
            <a
              href="#"
              title=""
              className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1  focus:ring-offset-2"
            >
              Customer Login
            </a>
            <a
              href="#"
              title=""
              className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-customBlue border border-transparent rounded-xl hover:bg-blue-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
            >
              Sign up
            </a>
          </div>
        </div>

        {expanded && (
          <nav>
            <div className="px-8 py-8 shadow-md rounded-md ">
              <div className="grid gap-y-7">
                <a
                  href="#"
                  title=""
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-customBlue transition-all duration-200 bg-white shadow-md border border-transparent rounded-xl hover:bg-orange-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 "
                >
                  Customer Login
                </a>
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-customBlue border border-transparent rounded-xl hover:bg-orange-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 "
                  role="button"
                >
                 Create Account
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
