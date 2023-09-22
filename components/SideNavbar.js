import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineCreateNewFolder,
  MdWorkspacesFilled,
  MdShare,
  MdIosShare,
  MdOutlineLogout,
} from "react-icons/md";

function SideNavbar() {
  return (
    <div>
      <Disclosure as="nav">
        <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
          <GiHamburgerMenu className="block md:hidden h-6 w-6" aria-hidden="true" />
        </Disclosure.Button>
        <div className="p-6 w-1/2 h-screen bg-gray-800 z-20 fixed top-0 -left-96 lg:left-0 lg:w-60 peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col justify-start items-center">
            <h1 className="text-4xl text-center cursor-pointer font-extrabold text-white border-b border-gray-700 pb-4 w-full">
              Kentron
            </h1>

            <div className="my-4 border-b border-gray-700 pb-4">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg w-full">
                <MdOutlineCreateNewFolder className="text-2xl text-gray-300 group-hover:text-white" />
                <h3 className="text-base text-gray-300 group-hover:text-white font-semibold">
                  Create Workspace
                </h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg w-full">
                <MdWorkspacesFilled className="text-2xl text-gray-300 group-hover:text-white" />
                <h3 className="text-base text-gray-300 group-hover:text-white font-semibold">
                  All Workspaces
                </h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg w-full">
                <MdShare className="text-2xl text-gray-300 group-hover:text-white" />
                <h3 className="text-base text-gray-300 group-hover:text-white font-semibold">
                  Share
                </h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg w-full">
                <MdIosShare className="text-2xl text-gray-300 group-hover:text-white" />
                <h3 className="text-base text-gray-300 group-hover:text-white font-semibold">
                  Export
                </h3>
              </div>
            </div>
            <div className="my-4 fixed bottom-1 pb-4">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-700 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg w-full">
                <MdOutlineLogout className="text-2xl text-gray-300 group-hover:text-white" />
                <h3 className="text-base text-gray-300 group-hover:text-white font-semibold">
                  Logout
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>

  );
}

export default SideNavbar;
