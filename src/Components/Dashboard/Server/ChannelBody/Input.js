import { useContext } from "react";
import ServerContext from "../../../Store/ServerContext";
import Gif from "../../../SVG/Gif";
import Sticker from "../../../SVG/Sticker";
import style from "../Server.module.css";

const Input = () => {
  const serverData = useContext(ServerContext);
  const channelName =
    serverData.channels[serverData.currentChannel].channelName;

  return (
    <div className={style.chatInput}>
      <div>
        <i className="fas fa-plus"></i>
      </div>
      <input type="text" placeholder={`Message #${channelName}`} />
      <ul>
        <li>
          <i className="fas fa-gift"></i>
        </li>
        <li>
          <Gif></Gif>
        </li>
        <li>
          <Sticker></Sticker>
        </li>
        <li>
          <i className="fas fa-smile-wink"></i>
        </li>
      </ul>
    </div>
  );
};

export default Input;
