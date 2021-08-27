import React from 'react';
import s from './Dialogs.module.css'
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let state = props.messagesPage;

    let dialogElements = state.dialogs.map( d => <DialogsItem name={d.name} key={d.id} id={d.id} />  );
    let messageElements = state.messages.map( m => <Message message={m.message} key={m.id} /> );
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }


    return (
            <div className={s.dialogs}>
                <div>
                    <div className={s.dialogsItem}>
                        {dialogElements}
                    </div>
                </div>
                <div>
                    <div className={s.messages}>
                        <div> {messageElements} </div>
                        <div><textarea
                            onChange={onNewMessageChange}
                            value={newMessageBody}
                            placeholder='Enter you message'></textarea></div>
                        <div>
                            <button onClick={onSendMessageClick}>send</button>
                        </div>
                    </div>

                </div>
            </div>
    )

}

export default Dialogs;