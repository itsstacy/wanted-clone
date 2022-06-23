import React, { useEffect, useState } from "react";
import profile from "../assets/profile_default.png";
import ScrollToBottom from "react-scroll-to-bottom";
import axios from "axios";

function Chat({ socket, username, room, emoji, profileimage }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        image: profileimage,
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    const SERVER_URL = "http://hayeon-sum.shop/api";
    // const access_token = localStorage.getItem("token");
    // console.log(access_token);

    axios.get(`${SERVER_URL}/chat/lists`, {}).then((response) => {
      console.log(response);
      setMessageList(response.data);
      console.log(messageList);
    });

    socket.on("receive_message", (data) => {
      console.log(data);
      setMessageList((list) => [...list, data]);
    });

    const filteredList = messageList.filter((message, index) => {
      if (message.room == room) {
        return true;
      }
    });
    console.log(filteredList);
    setFilteredList(filteredList);
  }, [socket, room, currentMessage]);

  return (
    <>
      <div className="chat-box-top">
        <div className="chat-box-head">
          {emoji} {room ? room : "카테고리를 선택해주세요"} / 원티드 CHAT
        </div>
      </div>
      <div className="chat-box-input">
        <img
          src={profileimage ? profileimage : profile}
          className="community-profile-image"
        />
        <input
          type="text"
          className="chat-input"
          placeholder="커리어와 라이프스타일에 대해 자유롭게 이야기 해주세요!"
          value={currentMessage}
          onChange={(e) => {
            setCurrentMessage(e.target.value);
          }}
          onKeyDown={(e) => {
            e.key === "Enter" && sendMessage();
          }}
        />
        <button className="send-btn" onClick={sendMessage}>
          Send
        </button>
      </div>
      <div className="chat-box-main">
        <ScrollToBottom className="message-container">
          {filteredList.map((messageContent) => {
            return (
              <div
                className="message"
                id={username === messageContent.author ? "you" : "other"}
              >
                <div>
                  <div className="message-meta">
                    <img
                      id="image"
                      src={messageContent.image}
                      className="chat-profile-image"
                    />
                    <p id="author">{messageContent.author}</p>
                    <p id="time">{messageContent.time}</p>
                  </div>
                  <div className="message-content">
                    <p>{messageContent.message}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
    </>
  );
}

export default Chat;
