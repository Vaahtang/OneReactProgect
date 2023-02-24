import Post from "./Posts/Posts";
import React from "react";

let reactElement = React.createRef()

let newPost = ()=>{
    let text=reactElement.current.value;
    alert(text)
}
const MyPosts = (p) => {

  let postDataMap = p.state.postData.map(post =>  <Post mesage={post.post} like={post.like}/>)
debugger
    return (
        <div>
            <div>
            <textarea ref={reactElement}>

            </textarea>
        </div>
            <div>
                <button onClick={newPost}>
dfdf
                </button>
            </div>
            <div>
            {postDataMap}
        </div>
        </div>
    )
}

export default MyPosts;
