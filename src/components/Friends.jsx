const Friends = ({ className, friends_data }) => {
  return (
    <ul className={className}>
      {friends_data.map((item, index) => {
        return (
          <li key={index}>
            <a href={item.link}>
              <div
                className={item.status ? "status green" : "status gray"}
              ></div>

              <img className="avatar" src={item.avatar} />
              {item.username}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Friends;
