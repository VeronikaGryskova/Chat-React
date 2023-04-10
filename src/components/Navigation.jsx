import Channels from "./Сhanells";

import Friends from "./Friends";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const Navigation = () => {
  const [channels, setChannels] = useState([]);
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/users").then((response) => {
      setFriends(response.data);
    });
    axios.get("http://localhost:3001/channels").then((response) => {
      setChannels(response.data);
    });
  }, []);
  return (
    <div className="navigation">
      <div className="content">
        <div className="nomad">
          <div className="nomadList">
            <div className="nomadList_title">Nomad List</div>
            <div className="nomadList_pointerDown"></div>
          </div>
          <a href="#" className="settings"></a>
        </div>
        <a href="#" className="allTreads">
          <div className="allTreads_icon"></div>
          <div className="allTreads_title">All treads</div>
        </a>
        <div className="channels">
          <div className="channels_header">
            <div className="channels_header_title">Channels</div>
            <div className="channels_header_numbers">{channels.length}</div>
          </div>
          <Channels
            className="channels_list"
            сhannels_data={channels}
          ></Channels>
        </div>
        <div className="friends">
          <div className="friends_header">
            <div className="friends_header_title">Friends</div>
            <div className="friends_header_numbers">{friends.length}</div>
          </div>
          <Friends className="friends_list" friends_data={friends}></Friends>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
