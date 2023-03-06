import { useContext } from "react";
import UserContext from "../../../Store/UserContext";
import style from "../Home.module.css";

const Users = () => {
  const data = useContext(UserContext);

  return (
    <div className={style.dmGroups}>
      <h3>
        <span>DIRECT MESSAGES</span>
        <i className="fas fa-plus"></i>
      </h3>
      {data.map((user, index) => {
        return (
          <div className={style.dm} key={`${user.userName}%${index}`}>
            <span>{user.userIcon}</span>
            <span>{user.userName}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
