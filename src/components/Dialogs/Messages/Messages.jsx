import s from "../Dialogs.module.css";


const Messages =(props)=>{
    return(
        <div className={s.message}>
            <div>
            {props.message}
        </div>
            <div>

            </div>
        </div>

    )
}







export default Messages;