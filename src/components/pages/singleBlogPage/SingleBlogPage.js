import React, { useEffect, useState } from "react";
import axios from "axios";
import { BLOG_URL } from "../../utils/urls";
import BlogCardExtra from "../../common/blogCardExtra";
import CommentComp from "../../common/commentComp";
import Comments from "../../common/comments";
import "../../../default.scss";
import "./SingleBlogPage.scss";
import { useParams } from "react-router-dom";
import moment from "moment";
import BlogCommon from "../../common/topBlogs";

const SingleBlogPage = (props) => {
  const [activeBlog, setActiveBlog] = useState([]);
  const [fetching,setFetching] = useState(true)
  const { slug } = useParams();

  const getPosts = async () => {
    const posts = await axios.get(BLOG_URL);
    setActiveBlog(posts.data.results);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const blog = activeBlog
    .filter((card) => card.slug === slug)
    .map((card, index) => {
      return (
        <div className="blogMain" key={index}>
          <img className="cover-main" src={card.cover} />
          <br />
          <div className="blogListComment" key={index}>
            <h3>{card.title}</h3>
            <div className="author" key={index}>
              Created By: {card.author.username}, On{" "}
              {moment(card.created_at).format("YYYY-MM-DD")}
            </div>
            <p dangerouslySetInnerHTML={{ __html: card.content }} />
            <CommentComp id={card.id} />
            <Comments id={card.id} />
          </div>
          <div className="blogExtras">
            <h4>Related Blogs</h4>
            {!fetching && <BlogCommon similar id = {card.id} />}
            
          </div>
        </div>
      );
    });

  return (
    <div className="singleBlog">
      <div className="blogListContainer">
        {blog}
        {/* {blog.map((card, index) => (
            <div className="blogMain" key={index}>
              <img className="cover-main" src={card.cover} />
              <br />
              <div className="blogListComment">
                <h3>{card.title}</h3>
                <div className="author">
                  Created By: {card.author.username}, On{" "}
                  {moment(card.created_at).format("YYYY-MM-DD")}
                </div>
                <p dangerouslySetInnerHTML={{ __html: card.content }} />

                <CommentComp id={card.id} />
                <Comments id={card.id} />
              </div>
              <div className="blogExtras">
                <h4>Related Blogs</h4>
                <BlogCardExtra />
              </div>
            </div>
          ))} */}
      </div>
    </div>
  );
};

export default SingleBlogPage;
