import React, { FC } from "react";
import SidebarComponent from "./sidebar";
import { Navbar, Dropdown, Avatar, Footer} from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

interface Props {
  children?: React.ReactNode;
}

interface User{
  id: string;
  email: string;
  password: string;
  companyName: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  updatedAt: string;
}
const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="h-screen">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand>
          <img
            src="https://nexusautomn.s3.amazonaws.com/static/img/logo.png"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
        </Navbar.Brand>
        <div className="flex md:order-2">
        <FontAwesomeIcon icon={faBell} />
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
              />
            }>
            
          </Dropdown>
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
