import React, { FC } from "react";
import SidebarComponent from "./sidebar";
import { Navbar, Dropdown, Avatar, Footer} from "flowbite-react";
import { useQuery } from "react-query";
import { axiosClient } from "../config/axios";
import { Popover } from "antd";
import { BiBell } from "react-icons/bi";

interface Props {
  children?: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {

  return (
    <div className="h-screen">
    <Navbar
      fluid={true}
      rounded={true}
      className="h-16 flex-row justify-center items-center">
      <Navbar.Brand>
        <img
          className="mr-3 h-10 sm:h-9"
          alt="Flowbite Logo"
          src="https://www.nexusautomotiveinternational.eu/wp-content/uploads/2022/09/New-nexus-logo-01.svg"
        />
      </Navbar.Brand>
      <div className="flex space-x-8">
        <div className="text-2xl hover:text-orange-500  flex justify-center items-center">
          <Popover
            content={
              <div className="flex-row items-center justify-center space-y-1">
                <div className="flex justify-center hover:bg-orange-300 rounded-md ">
                  Medegdel
                </div>
                
              </div>
            }
            title="Мэдэгдэл"
            trigger="click">
            <BiBell type="primary" />
          </Popover>
        </div>
        <div className="md:block hidden">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
              />
            }></Dropdown>
        </div>
      </div>
    </Navbar>
    <div className="flex">
      <SidebarComponent />

      <div className="w-full h-screen bg-gray-200">
        {children}
        <Footer className="mt-auto" container={true}>
          <Footer.Copyright href="#" by="Nexus Auto" year={2023} />
        </Footer>
      </div>
    </div>
  </div>
  );
};
export default Layout;
