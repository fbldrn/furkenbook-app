import React from 'react'
import "./sidebar.css"
import {Users} from "../../userData"
import CloseFriends from '../closeFriends/CloseFriends';


const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <span class="material-symbols-outlined">
                            feed
                        </span>
                        <span className='sidebarListItemText'>Feeds</span>
                    </li>
                    <li className="sidebarListItem">
                        <span class="material-symbols-outlined">
                            chat
                        </span>
                        <span className='sidebarListItemText'>Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <span class="material-symbols-outlined">
                            play_circle
                        </span>
                        <span className='sidebarListItemText'>Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <span class="material-symbols-outlined">
                            group
                        </span>
                        <span className='sidebarListItemText'>Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <span class="material-symbols-outlined">
                            bookmark
                        </span>
                        <span className='sidebarListItemText'>Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <span class="material-symbols-outlined">
                            help
                        </span>
                        <span className='sidebarListItemText'>Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <span class="material-symbols-outlined">
                            work
                        </span>
                        <span className='sidebarListItemText'>Work</span>
                    </li>
                    <li className="sidebarListItem">
                        <span class="material-symbols-outlined">
                            event
                        </span>
                        <span className='sidebarListItemText'>Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <span class="material-symbols-outlined">
                            school
                        </span>
                        <span className='sidebarListItemText'>Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    {Users.map(u=>(
                        <CloseFriends key={u.id} user={u} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Sidebar