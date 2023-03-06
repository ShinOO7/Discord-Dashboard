import User from "../../User";
import Users from "./Users";
import Friends from "../../../SVG/Friends";
import NitroIcon from "../../../SVG/NitroIcon";
import style from "../Home.module.css";

const HomeBar = () => {
  return (
    <aside className={style.homeBar}>
      <div className={style.homeBarInput}>
        <button>Find or start a conversation</button>
      </div>
      <div className={style.homeBarIcon}>
        <Friends></Friends>
        <span>Friends</span>
      </div>
      <div className={style.homeBarIcon}>
        <NitroIcon></NitroIcon>
        <span>Nitro</span>
      </div>
      <Users></Users>
      <User></User>
    </aside>
  );
};

export default HomeBar;
