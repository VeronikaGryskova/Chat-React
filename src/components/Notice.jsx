import noticeIcon from "../img/icons/notice.svg";
import newNoticeIcon from "../img/icons/newNotice.svg";

const Notice = () => {
  return (
    <a href="#" className="notice">
      <img className="notice_icon" src={noticeIcon} />
      <img className="notice_iconNew" src={newNoticeIcon} />
    </a>
  );
};

export default Notice;
