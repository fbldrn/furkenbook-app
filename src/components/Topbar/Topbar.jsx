import "./topbar.css"
import React from 'react'
import { Link, useParams } from "react-router-dom"

const Topbar = () => {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">FurkenBook</span>
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <span class="material-symbols-outlined">
                        search
                    </span>
                    <input type="text" placeholder="Search for friend, post or video" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLink">
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <span className="topbarLink">Homepage</span>
                    </Link>
                    <Link to="/login">
                    <span className="topbarLink">Timeline</span>
                    </Link>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <span class="material-symbols-outlined">
                            person
                        </span>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <span class="material-symbols-outlined">
                            chat
                        </span>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <span class="material-symbols-outlined">
                            notifications
                        </span>
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <Link to="/profile/:id" style={{ textDecoration: "none" }}>
                <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
                </Link>
            </div>
        </div>
    )
}

export default Topbar