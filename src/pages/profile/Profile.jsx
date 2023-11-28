import React from 'react'
import './profile.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Topbar from '../../components/Topbar/Topbar'
import Rightbar from '../../components/rightbar/Rightbar'
import { useParams } from 'react-router-dom'
import {Users} from "../../userData"

const profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const {id} = useParams();
  
  return (
    <>

      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
            <img className="profileCoverImg" src={`${PF}post/1.jpg`} alt="" />
            <img className="profileUserImg" src={`${PF}person/1.jpeg`} alt="" />
            </div>
            <div className="profileInfo">
              <h1 className='profileInfoName'>Furkan {id}</h1>
              <span className="profileInfoDesc">Back to the Future!</span>
            </div>
            </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>

    </>
  )
}

export default profile