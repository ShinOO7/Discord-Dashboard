import Channels from "./Channels";
import ServerContext from "../../../Store/ServerContext";
import User from "../../User";
import { useContext } from "react";
import style from "../Server.module.css";

const ServerBar = () => {
  const serverData = useContext(ServerContext);

  const channelList = serverData.channels.map((curr) => {
    return curr.channelName;
  });

  return (
    <aside className={style.serverBar}>
      <div className={style.serverName}>
        <h2>{serverData.serverName}</h2>
        <i className="fas fa-angle-down"></i>
      </div>
      <Channels channels={channelList}></Channels>
      <User></User>
    </aside>
  );
};

export default ServerBar;
