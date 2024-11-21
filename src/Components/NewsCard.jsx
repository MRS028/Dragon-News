import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaEye, FaShareAlt } from "react-icons/fa";

const NewsCard = ({ data }) => {
  return (
    <div className="card w-full bg-white shadow-lg border border-gray-200 rounded-lg overflow-hidden">
      {/* Card Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <img
            src={data.author.img}
            alt={data.author.name}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{data.author.name}</h3>
            <p className="text-sm text-gray-500">{data.author.published_date}</p>
          </div>
        </div>
        <button className="text-gray-500 hover:text-gray-800">
          <FaShareAlt />
        </button>
      </div>

      {/* Card Image */}
      <img
        src={data.thumbnail_url}
        alt={data.title}
        className="w-full h-48 object-cover"
      />

      {/* Card Content */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">
          {data.title}
        </h2>
        <p className="text-sm text-gray-500 mt-2">
          {data.details.slice(0, 120)}...{" "}
          <button className="text-blue-500 hover:underline">Read More</button>
        </p>
      </div>

      {/* Card Footer */}
      <div className="flex items-center justify-between px-4 py-3 border-t">
        {/* Ratings */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, index) => (
            <AiFillStar
              key={index}
              className={`${
                index < Math.round(data.rating.number)
                  ? "text-yellow-500"
                  : "text-gray-300"
              }`}
            />
          ))}
          <span className="text-gray-500 ml-2">{data.rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-gray-500">
          <FaEye />
          <span>{data.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
