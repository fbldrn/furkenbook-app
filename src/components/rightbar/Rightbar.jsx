import React from 'react'
import "./rightbar.css"
import { Users } from "../../userData"
import Online from '../../components/online/Online'


const Rightbar = ({profile}) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className='birthdayImg' src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Kibariye Doğan</b> and <b>1 other friends</b> have a birthday today
          </span>
        </div>
        <img className='rightbarAd' src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u => (
            <Online key={u.id} user={u} />
          ))}

        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
    <>
    <h4 className='rightbarTitle'>User information</h4>
    <div className="rightbarInfo">
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">City:</span>
        <span className="rightbarInfoValue">Adana</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">From:</span>
        <span className="rightbarInfoValue">Mersin</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Relationship:</span>
        <span className="rightbarInfoValue">Single</span>
      </div>
    </div>
    <h4 className='rightbarTitle'>User friends</h4>
    <div className="rightbarFollowings">
      <div className="rightbarFollowing">
        <img className="rightbarFollowingImg" src={`${PF}person/2.jpeg`} alt="" />
        <span className="rightbarFollowingName">Yağızss İdiz</span>
      </div>
      <div className="rightbarFollowing">
        <img className="rightbarFollowingImg" src={`${PF}person/3.jpg`} alt="" />
        <span className="rightbarFollowingName">Yağız İdiz</span>
      </div>
      <div className="rightbarFollowing">
        <img className="rightbarFollowingImg" src={`${PF}person/4.jpg`} alt="" />
        <span className="rightbarFollowingName">Yağız İdiz</span>
      </div>
      <div className="rightbarFollowing">
        <img className="rightbarFollowingImg" src={`${PF}person/5.jpg`} alt="" />
        <span className="rightbarFollowingName">Yağız İdiz</span>
      </div>
      <div className="rightbarFollowing">
        <img className="rightbarFollowingImg" src={`${PF}person/6.jpg`} alt="" />
        <span className="rightbarFollowingName">Yağız İdiz</span>
      </div>
      <div className="rightbarFollowing">
        <img className="rightbarFollowingImg" src={`${PF}person/7.jpg`} alt="" />
        <span className="rightbarFollowingName">Yağız İdiz</span>
      </div>
      <div className="rightbarFollowing">
        <img className="rightbarFollowingImg" src={`${PF}person/2.jpeg`} alt="" />
        <span className="rightbarFollowingName">Yağız İdiz</span>
      </div>
      <div className="rightbarFollowing">
        <img className="rightbarFollowingImg" src={`${PF}person/2.jpeg`} alt="" />
        <span className="rightbarFollowingName">Yağız İdiz</span>
      </div>
      <div className="rightbarFollowing">
        <img className="rightbarFollowingImg" src={`${PF}person/2.jpeg`} alt="" />
        <span className="rightbarFollowingName">Yağız İdiz</span>
      </div>
    </div>
    </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
      {profile ? <ProfileRightBar/> : <HomeRightBar/>}
      </div>
    </div>
  )
}

export default Rightbar