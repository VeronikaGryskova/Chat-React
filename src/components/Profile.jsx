import BaseList from "./base/BaseList";
import facebook from "../img/icons/facebook.svg";
import twitter from "../img/icons/twitter.svg";
import instagram from "../img/icons/instagram.svg";
import linkedIn from "../img/icons/linkedIn.svg";
const Profile = ({ profile }) => {
  const icons = [
    {
      icon: facebook,
      link: "https://ru-ru.facebook.com/",
    },
    {
      icon: twitter,
      link: "https://twitter.com/",
    },
    {
      icon: instagram,
      link: "https://www.instagram.com/",
    },
    {
      icon: linkedIn,
      link: "https://www.likeni.ru/glossary/linkedin/",
    },
  ];
  return (
    <div className="profile">
      <div className="profile_avatar"></div>
      <div className="profile_information">
        <div className="profile_name">
          <div className="username">{profile.fullName}</div>
          <div className="status">{profile.status}</div>
        </div>

        <div className="profile_description">{profile.description}</div>
        <div className="profile_social">
          <BaseList className="socialList" data={icons}></BaseList>
        </div>
        <div className="profile_connection">
          <button className="message">Message</button>
          <button className="toggle">
            <div className="toggle_icon"></div>
          </button>
        </div>
        <div className="profile_username">
          <div className="profile_username_title">Username</div>
          <div className="profile_username_name">{profile.username}</div>
        </div>
        <div className="profile_email">
          <div className="profile_email_title">Email</div>
          <div className="profile_email_name">{profile.email}</div>
        </div>
        <div className="profile_skype">
          <div className="profile_skype_title">Skype</div>
          <div className="profile_skype_name">{profile.skype}</div>
        </div>
        <div className="profile_timezone">
          <div className="profile_timezone_title">Timezone</div>
          <div className="profile_timezone_time">{profile.timezone}</div>
        </div>
        <div className="pointer"></div>
      </div>
    </div>
  );
};

export default Profile;
