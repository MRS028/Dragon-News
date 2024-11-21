import React, { useEffect } from "react";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import NavBar from "../Components/NavBar";
import LeftNavBar from "../Components/Layout-component/LeftNavBar";
import RightNav from "../Components/RightNav";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
const HomeLayout = () => {
  useEffect(() => {
    document.title = "Home | Dragon News";
  }, []);
  return (
    <div className="font-poppins">
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav className="w-11/12 mx-auto py-5">
          <NavBar></NavBar>
        </nav>
      <main className="w-11/12 mx-auto pt-6 grid md:grid-cols-12">
      <aside className="left col-span-3"><LeftNavBar></LeftNavBar></aside>
      <section className="col-span-6">
      <Outlet></Outlet>
      </section>
      <aside className="col-span-3 mx-5"><RightNav></RightNav></aside>
      
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
