"use client";
import { useState } from "react";
import {
  PaperAirplaneIcon,
  MoonIcon,
  SunIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

function App() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const closeMenu = () => setToggleMenu(false);

  return (
    <div className="bg-black text-white">
      <nav>
        <div className="max-w-8xl mx-auto">
          <div className="flex mx-auto justify-between w-5/6 items-center p-10">
            {/* Logo aligned to the left */}
            <div className="flex items-center">
              <a
                href="/"
                className="flex gap-1 font-extrabold text-white items-center"
              >
                <PaperAirplaneIcon className="h-6 w-6 text-primary" />
                <span>Bloodline</span>
              </a>
            </div>

            {/* Primary links aligned to the right on large screens */}
            <div className="hidden lg:flex gap-8 justify-end w-full">
              <a
                href="#"
                className="hover:text-red-600 transition-all duration-300"
              >
                Home
              </a>
              <a
                href="#"
                className="hover:text-red-600 transition-all duration-300"
              >
                Benefits
              </a>
              <a
                href="#"
                className="hover:text-red-600 transition-all duration-300"
              >
                Our Classes
              </a>
              <a
                href="#"
                className="hover:text-red-600 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>

            {/* Additional buttons and icons */}
            <div className="flex gap-6 items-center">
              <div className="hidden xs:flex items-center gap-10">
                <div className="hidden lg:flex items-center gap-2">
                  <MoonIcon className="h-6 w-6" />
                  <SunIcon className="h-6 w-6" />
                </div>
                <div>
                  <button className="rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100">
                    Free Trial
                  </button>
                </div>
              </div>

              {/* Mobile navigation toggle */}
              <div className="lg:hidden flex items-center">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <Bars3Icon className="h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Backdrop */}
        {toggleMenu && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={closeMenu} // Clicking the backdrop closes the sidebar
          />
        )}

        {/* Mobile navigation (sidebar) */}
        <div
          className={`fixed z-40 top-0 left-0 w-[50%] h-full bg-black text-white overflow-hidden transform ${
            toggleMenu ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-500 ease-in-out lg:hidden`}
        >
          {/* Close button */}
          <div className="flex justify-end p-4">
            <button onClick={closeMenu}>
              <XMarkIcon className="h-8 w-8 text-white" />
            </button>
          </div>

          <div className="flex flex-col gap-2 font-bold tracking-wider p-4">
            <a
              href="#"
              className="hover:bg-red-600 hover:text-white p-2 text-sm rounded-md transition-all"
            >
              Home
            </a>
            <a
              href="#"
              className="hover:bg-red-600 hover:text-white p-2 text-sm rounded-md transition-all"
            >
              Benefits
            </a>
            <a
              href="#"
              className="hover:bg-red-600 hover:text-white p-2 text-sm rounded-md transition-all"
            >
              Our Classes
            </a>
            <a
              href="#"
              className="hover:bg-red-600 hover:text-white p-2 text-sm rounded-md transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
