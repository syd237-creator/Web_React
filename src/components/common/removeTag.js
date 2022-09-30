import React from "react";

const RemoveTag = (content)=>{
    const regex = /(<([^>]+)>)/gi
    const regex2 = /(&([a-z]+);)/gi
    console.log(content)
    return (
        <>
            {content}
        </>
    )
}

export default RemoveTag;