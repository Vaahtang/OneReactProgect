import s from './Dialogs.module.css'
import Messages from "./Messages/Messages";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";


let textareaElement = React.createRef()


let MessageButtonClick =()=>{
    let textMessageProfile =  textareaElement.current.value
    alert(textMessageProfile)
}

const Dialogs=(p)=>{

    let messageDataMap = p.state.messageData.map(message =>  <Messages  id={message.id} message={message.message} />)
    let  DialogMap = p.state.dialogsData.map( dialog =>   <DialogItem id={dialog.id} name={dialog.name}/>)

    return(
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {DialogMap}
            </div>
            <div className={s.messages}>
                {messageDataMap}
                <div>
                    <textarea ref={textareaElement}>

                    </textarea>
                </div>
                <button onClick={MessageButtonClick}>
                    ldsfslkdfjlks
                </button>
            </div>

        </div>
    )
}
export default Dialogs;