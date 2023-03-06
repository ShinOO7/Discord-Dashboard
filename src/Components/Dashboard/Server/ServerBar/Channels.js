import ServerContext from "../../../Store/ServerContext";
import { useContext, useState } from "react";
import style from "../Server.module.css";
import { useEffect } from "react/cjs/react.development";

const Channels = (props) => {
  const serverData = useContext(ServerContext);
  const [prevElement, setPrevElement] = useState(null);

  useEffect(() => {
    setPrevElement(document.querySelector(`.${style.initial}`));
  }, []);

  const onClickHandler = (event) => {
    serverData.changeChannel(event.target.id);
    addClass(event.target);
  };

  const addClass = (element) => {
    if (prevElement) prevElement.className = "";
    element.className = `${style.activeChannel}`;
    setPrevElement(element);
  };

  return (
    <ul className={style.channels}>
      <h3>
        <i className="fas fa-angle-down"></i>TEXT CHANNELS
      </h3>
      {props.channels.map((curr, index) => (
        <button
          key={`${curr}-${index}`}
          id={index}
          onClick={onClickHandler}
          className={index == 0 ? `${style.initial}` : ""}
        >
          #<span>{curr}</span>
          <i className="fas fa-user-plus"></i>
        </button>
      ))}
    </ul>
  );
};

export default Channels;
