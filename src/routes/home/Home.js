import React from "react";
import { Outlet } from "react-router-dom";
import CategoryMenu from "../../components/category-menu/CategoryMenu";

function Home(props) {
  return (
    <div>
      <Outlet />
      <footer>All Rights Reserved. Michael K 2022.</footer>
    </div>
  );
}

export default Home;
