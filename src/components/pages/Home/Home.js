import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Home.scss";
import "../../../default.scss";
import axios from "axios";
import { BLOG_URL } from "../../utils/urls";
import BlogCard from "../../common/blogCard";
import BlogCommon from "../../common/topBlogs";
import ReactPaginate from "react-paginate";

const Home = (props) => {
  const [fetching, setFetching] = useState(true);
  const [blogList, setBlogList] = useState([]);
  const [currentPage, setCurrentpage] = useState(1);
  const [search, setSearch] = useState("");
  let debouncer;

  useEffect(() => {
    clearTimeout(debouncer);
    debouncer = setTimeout(() => {
      let extra = `?keyword=${search}&page=${currentPage}`;
      getBlogContent(extra);
    });
  }, [search, currentPage]);

  const getBlogContent = (extra = "") => {
    setFetching(true);
    axios
      .get(BLOG_URL + extra)
      .then((res) => {
        setBlogList(res.data);
        setFetching(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="banner">
        <h3>The SeoBlog</h3>
        <p>새로운 블로그</p>
        <div className="searchBlog">
          <input
            placeholder="Search blog contents"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      {fetching ? (
        <div className="blogListContainer">
          <Skeleton circle={500} />
        </div>
      ) : (
        <div className="blogListContainer">
          <div className="blogMain">
            <div className="blogList">
              {blogList.results.map((item, id) => (
                <BlogCard key={id} data={item} />
              ))}
            </div>
            <div className="blogExtras">
              <h4>Top Blogs</h4>
              <BlogCommon />
            </div>
          </div>
        </div>
      )}
      {!fetching && (
        <div className="pagination">
          <ReactPaginate
            pageCount={Math.ceil(blogList.count / 1)}
            pageRangeDisplayed={10}
            onPageChange={(e) => setCurrentpage(e.selected + 1)}
            marginPagesDisplayed={1}
            previousLabel="< 이전"
            nextLabel="다음 >"
            forcePage={currentPage - 1}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
