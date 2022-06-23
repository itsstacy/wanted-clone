import React, {useState, useEffect} from 'react'
import profile from '../assets/profile_default.png'
import styled from 'styled-components';
import io from "socket.io-client";
import Chat from './Chat';
import axios from 'axios';

const socket = io.connect("http://hayeon-sum.shop/chat");

function Community() {

  const [user, setUser] = useState([]);
  
  useEffect(() => {
    const SERVER_URL = "http://hayeon-sum.shop/api";
    const access_token = localStorage.getItem("token");
    console.log(access_token);

    axios
    .get(`${SERVER_URL}/communities`,{
      headers: {Authorization: `Bearer ${access_token}`}
    })
    .then((response) => {
      console.log(response);
      const data = response.data;
      setUser(data);
      setUsername(data.username);
      setProfileImage(data.profileimage);
    });
    console.log(user);  
  },[])

  const Roomlist = [
    {emoji: "💼", roomname: "커리어 고민"},
    {emoji: "🍯", roomname: "꿀팁"},
    {emoji: "🔮", roomname: "콘텐츠 추천"},
    {emoji: "💻", roomname: "개발"},
    {emoji: "📣", roomname: "마케팅"},
    {emoji: "🎨", roomname: "디자인"},
    {emoji: "🔍", roomname: "HR"},
    {emoji: "💡", roomname: "직장인 명언"},
    {emoji: "🌈", roomname: "일상"},
    {emoji: "🎢", roomname: "유머"}
  ]

  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [emoji, setEmoji] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [profileimage, setProfileImage] = useState(null);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };
  
  return (
    <div className="greybackground">
      <div className='community-container'>
        <div className='community-aside'>

          <div className='aside-user'>
            <p className="card-location">MY 커뮤니티</p>
            <div className='rowwrapper'>
              <img src ={profileimage? profileimage : profile} className='community-profile-image'/>
              <p className='userid'> {username? username : "로그인 해주세요."} </p>
            </div>
          </div>

          <div className='aside-rooms'>
            <p className="card-location">카테고리</p>

            {Roomlist.map((menu,idx) =>{
              return (
                <RoomCategory room={room} menu={menu.roomname}
                onClick={()=>{
                  setEmoji(menu.emoji);
                  setRoom(menu.roomname);
                  joinRoom();
                  console.log(room);
                }}><span className='emoji'>{menu.emoji}</span>{menu.roomname}</RoomCategory>
              )
            })}
          </div>
        </div>
        <div className='community-content'>
          <Chat socket={socket} username={username} room={room} emoji={emoji} profileimage={profileimage} />
        </div>
      </div>
    </div>
  )
}

export default Community;


const RoomCategory = styled.div`
  margin: 5px 0px 3px 0px;
  padding: 6px 8px 10px 8px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 7px;
  border: ${(props) => (props.room === props.menu ? "1px solid #e0dede" : "none" )};
  color:  ${(props) => (props.room === props.menu ? "#006bee" : "black" )};
  background-color: ${(props) => (props.room === props.menu ? "#edf5fb" : "none" )};
  &:hover {
    background-color: var(--background-color);
  }

`