import { useSelector } from "react-redux";
const InputChat = ({ onChange, onClick, onKeyDown, value }) => {
  const store = useSelector((state) => state);
  return (
    <div className="inputChat">
      <div className="left">
        <button className="attachFile"></button>
        <button className="microphone"></button>
      </div>
      <textarea
        placeholder={
          store.currentChannel
            ? `Message in ${store.currentChannel.title}`
            : "Select a channel"
        }
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={value}
        disabled={!store.currentChannel}
      ></textarea>
      {value.length > 0 && <button className="send" onClick={onClick}></button>}
      <button className="smiley"></button>
    </div>
  );
};

export default InputChat;
