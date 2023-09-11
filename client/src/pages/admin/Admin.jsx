// src/components/Admin.js
import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import { NavBar, Footer, Menu } from "../../components/index";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home } from "../../pages/index";
import {Users} from "../../sections/index"

const queryClient = new QueryClient();

function Layout({ children }) {
  return (
    <div className="main">
      <NavBar adminnavbar/>
      <div className="containerr">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </div>
      </div>
      <Footer adminFooter/>
    </div>
  );
}

function Admin() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            {/* This will render the child components */}
            <Outlet />
          </Layout>
        }
      >
        {/* Define nested routes here */}
        <Route path="/" element={<Home adminhome/>} />
        <Route path="/users/:id" element={<Users />} />
        {/* Add more nested routes if needed */}
      </Route>
    </Routes>
  );
}

export default Admin;
