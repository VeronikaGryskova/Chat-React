const Correspondence = ({ infoMessages }) => {
  return (
    <div className="messages">
      {infoMessages.map((doneSms) => (
        <div className="message" key={doneSms.id}>
          <img className="avatar" src={doneSms.user?.avatar} />
          <div className="info">
            <div className="nameAndTime">
              <div className="name"> {doneSms.user?.fullName}</div>
              <div className="time">{doneSms.time}</div>
            </div>

            <div className="content">{doneSms.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Correspondence;
