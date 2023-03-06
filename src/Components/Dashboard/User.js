import DiscordIcon from "../SVG/DiscordIcon";
import style from "./Home/Home.module.css";

const User = () => {
  return (
    <div className={style.user}>
      <div>
        <div>
          <DiscordIcon></DiscordIcon>
        </div>
        <div>
          <h4>SHIN007</h4>
          <span>#9884</span>
        </div>
      </div>
      <ul>
        <li>
          <i className="fas fa-microphone"></i>
        </li>
        <li>
          <i className="fas fa-headphones-alt"></i>
        </li>
        <li>
          <i className="fas fa-cog"></i>
        </li>
      </ul>
    </div>
  );
};

export default User;
