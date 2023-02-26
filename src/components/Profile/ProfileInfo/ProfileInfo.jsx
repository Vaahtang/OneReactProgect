
import s from './ProfileInfo.module.css';




const ProfileInfo =()=>{
    return(
        <div>
            <div>
                ava+deskription
            </div>
            <div className={s.ava}>
                <img src='https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg' />
            </div>
        </div>
    )
}
export default ProfileInfo;