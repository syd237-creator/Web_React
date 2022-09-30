import React from "react";
import moment from 'moment'
import { Link } from "react-router-dom";

const BlogCardExtra = (props) => {
    return (
      <div className="blogCardExtra" key={props.id}>
        <img className="blogImage" src={props.data.cover}/>
        <div className="blogContent">
          <div className="blogTitle">{props.data.title}</div>
          <button>Read Blog</button>
          <div className="footer">Created By : {props.data.author.username}, On {moment(props.data.created_at).format("YYYY-MM-DD")}</div>
        </div>
      </div>
    );
  };

export default BlogCardExtra;