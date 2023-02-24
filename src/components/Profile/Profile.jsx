import s from './Profile.module.css'
import MyPosts from "./Myposts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile  =(p)=>{
    return(
        <div className={s.profile}>
           <ProfileInfo/>
            <MyPosts state={p.state}/>
            </div>
    )
}
export default Profile;