import React from "react";
import Header from "../Components/Header";
import RightNav from "../Components/RightNav";
import { Link, useLoaderData } from "react-router-dom";

const NewsDetails = () => {
    const data = useLoaderData();
    const news = data.data[0];
    
  return (
    <>
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto md:grid md:grid-cols-12 gap-5 ">
        <section className="col-span-9">
          <h2 className="font-semibold mb-3">Dragon News</h2>
          <div className="card bg-base-100  border">
            <figure className="px-8 pt-8">
              <img
                src={news?.image_url}
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body ">
              <h2 className="card-title">{news?.title}</h2>
              <p className="text-justify">{news?.details}</p>
              <div className="card-actions pt-5 flex justify-end">
              <Link to={`/category/${news?.category_id}`} >  <button className="btn text-green-500 btn-outline">Back to News</button></Link>
              </div>
            </div>
          </div>
        </section>
        <aside className="col-span-3  hidden md:flex">
          {" "}
          <RightNav></RightNav>{" "}
        </aside>
      </main>
    </>
  );
};

export default NewsDetails;
