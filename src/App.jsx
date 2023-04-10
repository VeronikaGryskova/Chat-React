import "./styles/main.scss";
import Profile from "./components/Profile";
import Navigation from "./components/Navigation";
import Chat from "./components/Chat";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function App() {
  const [profile, setProfile] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:3001/myAcc").then((response) => {
      setProfile(response.data);
    });
    navigate("/");
  }, []);
  return (
    <div className="App">
      <Navigation></Navigation>
      <Chat></Chat>
      <Profile profile={profile}></Profile>
    </div>
  );
}

export default App;
