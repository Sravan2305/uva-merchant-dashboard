import React, { useCallback, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

import { navItems } from "../../constants/navbar";

import NavClose from "../svgs/sidebar/sidebarclose.svg";
import Logo from "../svgs/sidebar/logo.svg";
import LogoMini from "../svgs/sidebar/logomini.svg";
import LogOut from "../svgs/sidebar/logout.svg";
import { SideBarContext } from "../../context/SideBarContext";

function SideBarComp({ className }) {
  const { asPath } = useRouter();
  const { isCollapsed, setIsCollapsed } = useContext(SideBarContext);
  const handleCollapse = useCallback(() => {
    setIsCollapsed(!isCollapsed);
  }, [isCollapsed, setIsCollapsed]);

  if (isCollapsed && window.innerWidth < 1024) {
    return (
      <button
        className="fixed left-0 top-[25px] h-[30px] w-[30px] bg-primary grid place-items-center z-40 "
        onClick={handleCollapse}
      >
        {" "}
        <NavClose />
      </button>
    );
  }
  return (
    <div
      className={`relative h-screen overflow-y-auto s:w-screen xl:w-[240px] left-0 top-0 bottom-0 bg-sidebar-blue py-8 ${
        isCollapsed && "xl:w-[100px]"
      } ${className}`}
    >
      {/* Collapse Sidebar Button */}
      <button
        className="float-right h-[30px] w-[30px] bg-primary grid place-items-center"
        onClick={handleCollapse}
      >
        <NavClose />
      </button>
      <Link href="/" passHref>
        <div className="w-full cursor-pointer mt-[25px]">
          {!!!isCollapsed && <Logo className="m-auto my-12" />}
          {isCollapsed && (
            <LogoMini className="text-primary m-auto mb-8 mt-12" />
          )}
        </div>
      </Link>

      {/* Navbar and NavItems */}
      <nav className="pb-20">
        {navItems.map(({ name, link, Icon }) => {
          return (
            <Link href={link} passHref key={name}>
              <li
                className={`relative cursor-pointer flex items-center justify-start h-[50px] leading-5 px-5 text-text-grey ${
                  asPath === link
                    ? "bg-white text-primary"
                    : "bg-navbar-background text-text-grey"
                } ${isCollapsed && "justify-center"}`}
              >
                {asPath === link && (
                  <div className="absolute left-0 w-1 h-full bg-primary"></div>
                )}
                <Icon className="mr-[9px]" />
                {!!!isCollapsed && name}
              </li>
            </Link>
          );
        })}
      </nav>

      {/* LogOut and Profile */}
      <div
        className={`fixed bottom-0 w-full text-profile-text bg-sidebar-blue shadow-card-box-shadow ${
          isCollapsed ? "xl:max-w-[100px]" : "xl:max-w-[240px]"
        }`}
      >
        {/* Profile */}
        <div
          className={`flex items-center px-5 pt-5 justify-start ${
            isCollapsed && "justify-center"
          }`}
        >
          <Image
            src="/assets/images/profile.png"
            width="30px"
            height="30px"
            alt="profile picture"
          />

          {!!!isCollapsed && (
            <div className="flex flex-col ml-[10px]">
              <p className="leading-[15px] text-[12px] font-medium">
                Abu Turab Asim
              </p>
              <p className="leading-[15px] text-[12px]">turab.asim@gmail.com</p>
            </div>
          )}
        </div>

        {/* LogOut */}
        <div
          className={`h-[50px] bg-primary mt-5 text-white flex justify-start items-center cursor-pointer ${
            isCollapsed && "justify-center"
          }`}
        >
          <LogOut className={`ml-5 ${isCollapsed && "ml-0"}`} />
          {!!!isCollapsed && <p className="ml-[26px]">Sign Out</p>}
        </div>
      </div>
    </div>
  );
}

export const SideBar = React.memo(SideBarComp);
