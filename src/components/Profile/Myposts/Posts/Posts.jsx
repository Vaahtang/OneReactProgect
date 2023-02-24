import s from './Post.module.css'


const Post = (p) => {
    return (
        <div className={s.post}>
            <div className={s.postAva}>
                <img src='https://t4.ftcdn.net/jpg/05/11/55/91/360_F_511559113_UTxNAE1EP40z1qZ8hIzGNrB0LwqwjruK.jpg'/>
            </div>
            <div>
                {p.mesage}
            </div>
            <div>
                <button>
                    like
                    {p.like}
                </button>
            </div>
        </div>
    )
}
export default Post;