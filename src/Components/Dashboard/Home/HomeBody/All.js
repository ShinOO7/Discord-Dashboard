import { useContext } from "react";
import style from "./HomeBody.module.css";
import UserContext from "../../../Store/UserContext";

const All = () => {
  const userData = useContext(UserContext);
  return (
    <section className={style.allContainer}>
      <div className={style.allInput}>
        <input type="text" placeholder="Search" />
        <i className="fas fa-search"></i>
      </div>
      <div className={style.friendsList}>
        <span>ALL FRIENDS - {userData.length}</span>
        {userData.map((user, index) => (
          <div className={style.friend} key={`${user.userId}+${index}`}>
            <div className={style.friendIcon}>
              <div>{user.userIcon}</div>
              <div>
                <h3>{user.userName}</h3>
                <span>Offline</span>
              </div>
            </div>
            <div>
              <span>
                <i className="fas fa-comment-alt"></i>
              </span>
              <span>
                <i className="fas fa-ellipsis-v"></i>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default All;
