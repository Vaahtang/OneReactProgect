import {myProjeckt} from "../../render";


let state={

 dialogsPage:{
    messageData: [
        {id: 1, message: 'Hddddddddddddddddddddddddddddddi',},
        {id: 1, message: 'Hav or you',},
        {id: 1, message: 'You',},
    ],


        dialogsData: [
        {id: 1, name: 'ssddddds'},
        {id: 2, name: 'тфNina'},
        {id: 3, name: 'Kola'},
        {id: 4, name: 'Sveta'},
        {id: 5, name: 'Ola'},
    ],
},
    profilePage:{
    postData:[
        {id: 1, post: 'Hi', like: '12'},
        {id: 2, post: 'YO', like: '44'},
    ],
        newTextara:"",
}
}

export let addPost=(newPost)=>{

    let newPostData={
          id:3,
        post:newPost,
        like:6
    }
    state.profilePage.postData.push(newPostData)
    state.profilePage.newTextara= '';
    myProjeckt(state)
}

export let addTexarea = (text)=>{

state.profilePage.newTextara=text;

    myProjeckt(state)
}


export default state;