"use client";
import { Disclosure } from "@headlessui/react";
import { HiBars3 } from "react-icons/hi2";
import { HiOutlineXMark } from "react-icons/hi2";
import { useState } from "react";
import Link from "next/link";


export function Navbar() {

  const [current, setCurrentTab] = useState<boolean>(false)

  const navigation = [
    { name: "Home", href: "/", current: current },
    { name: "Posts", href: "/posts", current: current },
    { name: "Users", href: "/users", current: current },

  ];

  const handleTabClick = (): void => {
    setCurrentTab(prev => !prev);
  };




  return (
    <Disclosure as="nav" className=" fixed md:fixed md:right-0 z-50 right-0 left-0 top-0">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? <HiOutlineXMark /> : <HiBars3 />}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start md:justify-between">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block  h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                  
                </div>
                <div className="hidden sm:block sm:ml-8 ">
                  <div className="flex space-x-4 md:gap-4 ">
                    {navigation.map((item) => (
                      <a
                        onClick={handleTabClick}
                        key={item.name}
                        href={item.href}
                        className={(
                          item.current
                            ? "bg-gray-900 text-white" :
                            "text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-semibold"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  onClick={handleTabClick}
                  className={(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md text-base font-medium w-full"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  <link className="block px-3 py-2" >
                    <p>{item.name}</p>
                  </link>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}