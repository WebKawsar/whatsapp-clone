import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import db from '../../Firebase/Firebase';
import "./SidebarChat.css";



const SidebarChat = ({addNewChat, id, name}) => {

    const [seed, setSeed] = useState("");
    const [messages, setMessages] = useState("")

    useEffect(() => {
        if(id){
            db.collection("rooms").doc(id).collection("messages").orderBy("timestamp", "desc").onSnapshot(snapshot => (
                setMessages(snapshot.docs.map(doc => doc.data()))
            ))
        }
    }, [id])


    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])




    const createChat = () => {
        const roomName = prompt("Pleae enter name for chat")
        if(roomName){
            // doing work database
            db.collection("rooms").add({
                name:roomName
            })
        }

    }

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className="siderbarChat">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="sidebarChat_info">
                    <h2>{name}</h2>
                    <p>{messages[0]?.message}</p>
                </div>
            </div> 
        </Link>
    ): (
        <div onClick={createChat} className="siderbarChat">
            <h2>Add new chat</h2>
        </div>
    );
};

export default SidebarChat;