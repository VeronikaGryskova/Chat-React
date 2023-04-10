import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
const Channels = ({ className, сhannels_data }) => {
  const dispatch = useDispatch();

  const getChannelData = (channel) => {
    dispatch({
      type: "CHANGE_CURRENT_CHANNEL",
      payload: channel,
    });
  };

  return (
    <ul className={className}>
      {сhannels_data.map((item, index) => {
        return (
          <li key={index}>
            <NavLink
              activeClassName="active"
              to={`/channel/${item.id}`}
              onClick={() => getChannelData(item)}
            >
              {item.title}{" "}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default Channels;
