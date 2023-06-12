import React from "react";
import SideBar from "./SideBar";

const AdminLayout = ({children}) => {
  return (
    <div className="flex">
      <div className="basis-[12%] h-[100vh]">
        <SideBar />
      </div>
      <div className="basis-[88%]">
        <main>Test {children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
