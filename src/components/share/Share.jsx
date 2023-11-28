import React from 'react'
import "./share.css"

function Share() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src={`${PF}person/1.jpeg`} alt="" />
                    <input type="text" placeholder="What's in your mind?" className='shareInput' />
                </div>
                <hr className='shareHr' />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <span class="material-symbols-outlined">
                                perm_media
                            </span>
                            <span className="shareOptionText">Photo or Video</span>
                        </div>
                        <div className="shareOption">
                            <span class="material-symbols-outlined">
                                tag
                            </span>
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <span class="material-symbols-outlined">
                                add_reaction
                            </span>
                            <span className="shareOptionText">Feelings</span>
                        </div>
                        <div className="shareOption">
                            <span class="material-symbols-outlined">
                                location_on
                            </span>
                            <span className="shareOptionText">Location</span>
                        </div>
                    </div>
                    <button className='shareButton'>Share</button>
                </div>
            </div>
        </div>
    )
}

export default Share