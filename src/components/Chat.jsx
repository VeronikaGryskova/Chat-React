import HeaderChat from "./HeaderChat";
import InputChat from "./InputChat";
import { useState, useEffect } from "react";
import Correspondence from "./Correspondence";
import avatarAmiliaLuna from "../img/avatar.svg";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const Chat = () => {
  const [message, setMessage] = useState("");
  const user = {
    fullName: "Amilia Luna",
    avatar: avatarAmiliaLuna,
  };
  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  useEffect(() => {
    axios.get("http://localhost:3001/messages").then((response) => {
      dispatch({
        type: "ADD_MESSAGE",
        payload: response.data,
      });
    });
  }, []);

  const send = () => {
    const date = new Date();
    const smsDate = date.toLocaleString("ru-RU", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    axios
      .post(`http://localhost:3001/messages`, {
        user: user,
        time: smsDate,
        content: message,
        idChannel: store.currentChannel.id,
      })
      .then((response) => {
        dispatch({
          type: "ADD_MESSAGE",
          payload: [...store.messages, response.data],
        });
      });

    setMessage("");
  };
  return (
    <div className="chat">
      <HeaderChat></HeaderChat>
      <Correspondence
        infoMessages={store.messages.filter(
          (message) => message.idChannel === store.currentChannel?.id
        )}
      ></Correspondence>
      <InputChat
        onKeyDown={handleKeyDown}
        onChange={handleOnChange}
        onClick={send}
        value={message}
      ></InputChat>
    </div>
  );
};

export default Chat;
