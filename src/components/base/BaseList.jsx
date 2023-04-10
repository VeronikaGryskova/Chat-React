const BaseList = ({ className, data }) => {
  return (
    <ul className={className}>
      {data.map((item, index) => {
        return (
          <li key={index}>
            <a href={item.link}>
              <img src={item.icon} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default BaseList;
