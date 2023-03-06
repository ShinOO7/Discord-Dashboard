import { useContext } from "react";
import ServerContext from "../../../Store/ServerContext";
import NavPinIcon from "../../../SVG/NavPinIcon";
import Inbox from "../../../SVG/Inbox";
import QuestionMark from "../../../SVG/QuestionMark";
import style from "../Server.module.css";

const Navigation = () => {
  const serverData = useContext(ServerContext);

  return (
    <nav className={style.navigation}>
      <h2>
        <span>#</span>
        {serverData.channels[serverData.currentChannel].channelName}
      </h2>
      <ul>
        <li>
          <i className="fas fa-bell"></i>
        </li>
        <li>
          <NavPinIcon></NavPinIcon>
        </li>
        <li>
          <i className="fas fa-user-friends"></i>
        </li>
        <li className={style.navInput}>
          <input type="text" placeholder="Search"></input>
          <i className="fas fa-search"></i>
        </li>
        <li>
          <Inbox></Inbox>
        </li>
        <li>
          <QuestionMark></QuestionMark>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
