import React, { useContext, useEffect, useState } from "react";
import CommentCard from "./commentCard";
import axios from "axios";
import { BLOG_COMMENT_URL } from "../utils/urls";
import { store } from "../stateManagement/store";
import { CommentTriggerAction } from "../stateManagement/actions";

const Comments = (props) => {
  const [fetching, setFetching] = useState(true);
  const [commentList, setCommentList] = useState([]);
  const blog_id = props.id;

  const {
    state: { commentTrigger },
    dispatch,
  } = useContext(store);

  useEffect(() => {
    if (commentTrigger) {
      axios.get(BLOG_COMMENT_URL).then(
        (res) => {
          setCommentList(res.data.results);
          setFetching(false);
        },
        (err) => {
          console.log(err.response.data);
        }
      );
      dispatch({ type: CommentTriggerAction, payload: false });
    }
  }, [commentTrigger]);

  const com = commentList.filter(card => card.blog.id === blog_id).map((card,index) => {
    return(
      <div key={index}>
        <CommentCard key={index} data={card}/>
      </div>
    )
  })

  return (
    <div className="commentList">
      <h3>Comments</h3>
      {fetching && <i>loading...</i>}
      {!fetching && commentList.length < 1 && ( <h4>No comments</h4>)}
      {!fetching && com}
      {/* {commentList.results
        .filter((card) => card.blog.id === blog_id)
        .map((card, index) =>
          !fetching && card.length === true ? (
            <h4>No comments</h4>
          ) : (
            <CommentCard data={card} key={index} />
          )
        )} */}
    </div>
  );
};

export default Comments;
