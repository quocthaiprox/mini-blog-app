import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

const BlogDetails = () => {
  const [blogDetails, setBlogDetails] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const userName = location.state.blog.authorId.username;

  useEffect(() => {
    setBlogDetails(location.state.blog);
  }, []);

  // Format Date
  const date = new Date(blogDetails.createdAt);
  const formattedDate = date.toLocaleString("default", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div>
      <div className="w-full mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="px-6 py-4">
          <button
            onClick={() => {
              navigate("/");
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Back
          </button>
        </div>
        <div className="flex flex-col gap-8 md:flex-col lg:flex-row">
          <div className=" w-full md:w-full lg:w1/2">
            <div className="w-full rounded overflow-hidden shadow-lg my-4">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  {blogDetails.title}
                </div>
                <p className="text-gray-700 text-base text-justify">
                  {blogDetails.content}
                </p>
              </div>
              <div className="px-6 py-4">
                <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  <img
                    src="https://picsum.photos/600/400"
                    className="inline-block w-6 h-6 rounded-full"
                  />
                  <span
                    title={`Created by ${userName}`}
                    className="inline-block cursor-default bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                  >
                    {userName}
                  </span>
                </div>
                <span
                  title={`Created At ${formattedDate}`}
                  className="inline-block cursor-default mt-2 bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700"
                >
                  {formattedDate}
                </span>
              </div>
            </div>
          </div>

          <div className="md:w-full">
            <img
              className="w-full md:w-full max-h-screen rounded object-cover"
              src={blogDetails.image}
              alt={blogDetails.title}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
