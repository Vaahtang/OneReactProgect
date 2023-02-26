import Post from "./Posts/Posts";
import React from "react";




let reactElement = React.createRef()



const MyPosts = (p) => {

    let textData=()=>{
        let textData=reactElement.current.value;
        p.addTexarea(textData)

    }

    let newPost = ()=>{
        let text=reactElement.current.value;
      p.addPost(text)

    }
  let postDataMap = p.state.postData.map(post =>  <Post mesage={post.post} like={post.like}/>)

    return (
        <div>
            <div>
            <textarea ref={reactElement} onChange={textData} value={p.newTextara} />

        </div>
            <div>
                <button onClick={newPost}>
                    NewPost
                </button>
            </div>
            <div>
            {postDataMap}
        </div>
        </div>
    )

}

export default MyPosts;
