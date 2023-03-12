import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SidebarComponent from "./sidebar";
import { Navbar, Dropdown, Avatar, Footer } from "flowbite-react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Layout = ({ children }) => {
  return (
    <div className="h-screen">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand>
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            NexusAuto
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
              />
            }
          ></Dropdown>
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
