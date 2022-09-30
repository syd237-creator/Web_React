import React, { Component } from "react";
import "./commentCard.scss";
import moment from "moment";


const CommentCard = (props) => {
  return (
    <div className="comment-card">
      <p>{props.data.comment}</p>
      <div className="footer">
        {props.data.name} {moment(props.data.created_at).format("YYYY-MM-DD")}
      </div>
    </div>
  );
};

export default CommentCard;
