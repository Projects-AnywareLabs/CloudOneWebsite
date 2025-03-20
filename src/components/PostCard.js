import React from "react";

const BlogCard = ({ title, blogimage, author, authorImage, date, category,isVideo,link }) => {
  return (
    <div className="max-w-s bg-white rounded-xl shadow-md p-4 border border-gray-200">
      {/* Blog Image */}
      {
        isVideo ? (
            <iframe
              src={blogimage}
              height="230"
              width="100%"
              frameBorder="0"
              allowFullScreen
              title="Embedded Post"
              className="rounded-lg overflow-hidden"
              scrolling="no"
              allow="autoplay"
            ></iframe>
          ) : (
            <img
        src={blogimage}
        alt="Blog"
        className="w-full h-[15rem] xl2:h-50 object-cover rounded-lg pb-1"
      />
          )
      }
      

      {/* Tag */}
      <span className="inline-block mt-3 text-sm font-[500] text-[#4B6BFB] bg-blue-50 px-2 py-1 rounded-lg">
        {category}
      </span>

      {/* Blog Title */}
      <a href={link} target="_blank" rel="noopener noreferrer">
      <h2 className="text-lg font-semibold text-gray-900 mt-2 leading-tight pt-1">
        {title}
      </h2>
      </a>

      {/* Author & Date */}
      <div className="flex items-center mt-3 text-gray-600 text-sm pt-1">
        <img
          src={authorImage}
          alt="author"
          className="w-6 h-6 rounded-full"
        />
        <span className="ml-2 font-medium">{author}</span>
        <span className="ml-4">{date}</span>
      </div>
    </div>
  );
};

export default BlogCard;
