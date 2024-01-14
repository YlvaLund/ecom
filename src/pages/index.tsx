import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import MainLayout from "../layout/MainLayout";

function Index() {
  return (
    <MainLayout>
      <Navigation />
      <Outlet />
      <Footer />
    </MainLayout>
  );
}

export default Index;
