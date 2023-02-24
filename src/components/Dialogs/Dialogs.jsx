
import s from './Dialogs.module.css'
import Message from "./Messages/Messages";
import DialogItem from "./DialogItem/DialogItem";

/*
let messageData=[
    {id:1, message:'Hi',},
    {id:1, message:'Hav or you',},
    {id:1, message:'You',},
]

let dialogsData=[
    {id:1, name: 'ssddddds'},
    {id:2, name: 'тфNina'},
    {id:3, name: 'Kola'},
    {id:4, name: 'Sveta'},
    {id:5, name: 'Ola'},
]
*/


const Dialogs=(p)=>{

    let messageDataMap = p.state.messageData.map(message =>  <Message  id={message.id} message={message.message} />)
    let  DialogMap = p.state.dialogsData.map( dialog =>   <DialogItem id={dialog.id} name={dialog.name}/>)

    return(
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {DialogMap}
            </div>
            <div className={s.messages}>
                {messageDataMap}

            </div>
        </div>
    )
}
export default Dialogs;