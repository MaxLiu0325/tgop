import { Route, Routes, Navigate } from "react-router-dom";

import HomeHeader from "components/Headers/HomeHeader";
import HomeFooter from "components/Footers/HomeFooter";
import Home from "views/Home.js";

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const HomeLayout = (props) => {
  return (
    <div className="bg-white">
      <HomeHeader />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
      <HomeFooter />
    </div>
  );
};

export default HomeLayout;
