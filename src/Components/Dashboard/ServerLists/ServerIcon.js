import Icon from "./Icon";
import DashboardContext from "../../Store/DashboardData";
import { useContext, useEffect } from "react";
import style from "./ServerLists.module.css";
import { useRef } from "react";

const ServerIcon = (props) => {
  const data = useContext(DashboardContext);

  const serverIcon = useRef();

  const onClickHandler = (event) => {
    if (event.target.id < props.length - 3) data.serverChange(event.target.id);
    props.classChange(serverIcon.current);
  };

  return (
    <div className={style.iconContainer}>
      <button
        ref={serverIcon}
        id={props.id}
        className={`${style.serverIcon} ${props.id == 0 ? style.active : ""}`}
        onClick={onClickHandler}
      >
        {props.info.icon ? (
          <Icon add={props.info.icon}></Icon>
        ) : (
          <h2>{props.info.initials}</h2>
        )}
      </button>
      <div className={style.border}></div>
    </div>
  );
};

export default ServerIcon;
