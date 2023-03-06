import { useContext } from "react";
import ChannelContext from "../../../Store/ChannelContext";
import UserContext from "../../../Store/UserContext";
import Member from "./Member";
import style from "../Server.module.css";

const Members = () => {
  const members = useContext(ChannelContext).members;

  const userData = useContext(UserContext);

  return (
    <aside className={style.members}>
      <h4>OFFLINE</h4>
      {userData.map((user, index) => {
        if (members.includes(user.userName)) {
          return (
            <Member key={`${user.userName}^${index}`} userData={user}></Member>
          );
        }
      })}
    </aside>
  );
};

export default Members;
