import s from './Profile.module.css'
import MyPosts from "./Myposts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addTexarea} from "../Redux/State";


const Profile  =(p)=>{
    return(
        <div className={s.profile}>
           <ProfileInfo/>
            <MyPosts state={p.state} addPost={p.addPost} addTexarea={p.addTexarea} newTextara={p.state.newTextara}/>
            </div>
    )
}
export default Profile;