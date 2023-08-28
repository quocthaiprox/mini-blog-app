import axios from "axios";
import Pagination from "@mui/material/Pagination";
import React, { useEffect, useState } from "react";
import BlogItem from "./BlogItem";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  useEffect(() => {
    axios
      .get(
        `https://bazaar-shop-backend.onrender.com/api/blogs?_page=${currentPage}`
      )
      .then((res) => {
        setIsLoading(false);
        setBlogs(res.data.blogs);
        setTotalPages(res.data.pagination.total);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  }, [currentPage]);
  return (
    <div>
      <div className="">
        <div className=" flex flex-col items-center gap-4">
          <h1 className="text-lg bg-black text-white py-2 w-full text-center">
            Mini Blog App - Ngo Quoc Thai
          </h1>
          <span className=" w-20 rounded-lg h-[4px] bg-black"></span>
        </div>
        <div className=" max-w-screen-xl mx-auto py-10 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 px-4">
          {/* <BlogItem /> */}
          {blogs.map((blog) => {
            return <BlogItem key={blog._id} blog={blog} />;
          })}
        </div>
      </div>
      <div className="flex justify-center pb-4">
        <Pagination
          count={totalPages}
          variant="outlined"
          shape="rounded"
          page={currentPage}
          onChange={(e, page) => {
            setCurrentPage(page);
          }}
        />
      </div>

      {/* LOADING ANIMATION */}
      {isLoading && (
        <div>
          <div
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
            id="loading-overlay"
          >
            <div className="w-2/3 md:w-2/3 text-center">
              <div
                className="inline-block w-4 h-4 md:w-8 md:h-8 lg:h-8 lg:w-8 animate-spin text-white rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              ></div>
              <span className="ml-4 text-white">
                Please wait for a minute while loading API ...
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
