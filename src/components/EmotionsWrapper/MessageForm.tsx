import React, { useEffect, useState } from "react";

type MessageFormProps = {
    // showMessage: boolean;
    message: {fieldOne: string, fieldTwo: string, fieldThree: string, fieldFour: string};
    onChange: (event: any) => void;
    sendMessage: (event: any) => void;
    closeMessage: () => void;
}


const MessageForm = ({ closeMessage, message ,onChange, sendMessage }: MessageFormProps) => {
    const [visability, setVisability] = useState(false);

    return (
        // showMessage ?
            <div className='message-form'>
                {Object.keys(message).map((k)=> {
                    return (
                        <>
                            <h5>{k}</h5>
                            <textarea key={k} id={k} onChange={onChange}></textarea>
                        </>
                    )
                })}
                <button type='button' onClick={sendMessage}>send</button>
                <button type='button' onClick={closeMessage}>close</button>
            </div>

    )
}

export default MessageForm;