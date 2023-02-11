import db from "../../../firebase";
import { collection, addDoc } from "firebase/firestore"
import { useState } from "react"

export const ChatForm = ({user}) => {
    const [text, setText] = useState("")
    const onChangeText = (e) => {
        setText(e.target.value)
    }

    const onAddText = async () => {
        try {
            // eslint-disable-next-line no-unused-vars
            const docRef = await addDoc(collection(db, "users"), {
                text: text,
                name: user
            })
        } catch (e) {
            console.error("error : ",e)
        }
    }

    return(
        <div>
            <input type="text" value={text} onChange={onChangeText} />
            <button onClick={onAddText}>送信</button>
        </div>
    )
}