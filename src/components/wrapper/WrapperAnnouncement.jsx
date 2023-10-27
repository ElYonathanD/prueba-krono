import "./styles.css";
import PropTypes from "prop-types";

const WrapperAnnouncement = ({ items }) =>{
  return (
    <div className="container-announcement">
      <ul className="wrapper-announcement">
        {items.map((item, i) => (
          <li className="wrapper-item" key={i}>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

WrapperAnnouncement.propTypes = {
  items: PropTypes.array.isRequired,
};

export default WrapperAnnouncement;
