import React from "react";
import { Outlet } from "react-router-dom";
import AuthStatus from "./AuthStatus";

const Layout = () => {
  return (
    <div className="main-container">
      <AuthStatus />
      <header className="app-title">
        <h2>Todo App</h2>
        <h3>Here we updated new dev1 branch</h3>
      </header>

      <Outlet />
    </div>
  );
};

export default Layout;
