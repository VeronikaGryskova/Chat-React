import Notice from "./Notice";
import Search from "./Search";
import { useSelector } from "react-redux";
const HeaderChat = () => {
  const store = useSelector((state) => state);

  return (
    <div className="headerChat">
      <div className="headerChat_title">
        <div className="headerChat_title_name">
          {store.currentChannel?.title}
        </div>
        <div className="headerChat_title_favorites"></div>
      </div>
      <div className="headerChat_info">
        <a href="#" className="participants">
          <div className="participants_icon"></div>
          <div className="participants_quantity">1,093</div>
        </a>
        <Search></Search>
        <Notice></Notice>
        <a href="#" className="kebabMenu">
          <div className="kebabMenu_icon"> </div>
        </a>
      </div>
    </div>
  );
};

export default HeaderChat;
