
import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import { Chat, DonutLarge, MoreVert } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import db from '../../Firebase/Firebase';
import { useStateValue } from '../../Redux/StateProvider';
import SidebarChat from '../SidebarChat/SidebarChat';
import "./Sidebar.css";



const Sidebar = () => {
    const [{ user }, dispatch] = useStateValue();
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const unsubscribe = db.collection("rooms").onSnapshot(snapshot => (
            setRooms(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        ))

        return () => {
            unsubscribe();
        }
    }, [])


    return (
        <>
            <div className="sidebar">
                <div className="sidebar_header">
                    <IconButton>
                        <Avatar src={user?.photoURL} />
                    </IconButton>
                    <div className="sidebar_headerRight">
                        <IconButton>
                            <DonutLarge />
                        </IconButton>
                        
                        <IconButton>
                            <Chat />
                        </IconButton>

                        <IconButton>
                            <MoreVert />
                        </IconButton>
                        
                    </div>

                </div>
                <div className="sidebar_search">
                    <div className="sidebar_searchContainer">
                        <SearchOutlined />
                        <input type="text" placeholder="Seacrh or start new chat"/>
                    </div>
                </div>
                <div className="sidebar_chats">
                    <SidebarChat addNewChat />
                    {
                        rooms.map(room => <SidebarChat key={room.id} id={room.id} name={room.data.name} />)
                    }
                </div>
            </div>
        </>
    );
};

export default Sidebar;