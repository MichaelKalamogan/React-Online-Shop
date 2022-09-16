import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import NavigationBar from "../../components/navigation/NavigationBar";

function Home(props) {
  return (
    <div>
      <NavigationBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Home;
