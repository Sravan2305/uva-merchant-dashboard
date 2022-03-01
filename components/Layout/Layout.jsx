import React, { memo } from "react";
import { SideBar } from "../SideBar/SideBar";

const LayoutComp = ({ children }) => {
  return (
    <main className="xl:flex xl:justify-start">
      <SideBar />
      <section className="xl:flex-1 ">{children}</section>
    </main>
  );
};

export const Layout = memo(LayoutComp);
