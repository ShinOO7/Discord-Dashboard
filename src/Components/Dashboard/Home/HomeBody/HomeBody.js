import All from "./All";
import Blocked from "./Blocked";
import Online from "./Online";
import Pending from "./Pending";
import AddFriends from "./AddFriends";
import ActiveNow from "./ActiveNow";
import style from "./HomeBody.module.css";

const HomeBody = (props) => {
  return (
    <section className={style.body}>
      {props.current == "Online" ? (
        <Online></Online>
      ) : props.current == "Pending" ? (
        <Pending></Pending>
      ) : props.current == "Blocked" ? (
        <Blocked></Blocked>
      ) : props.current == "All" ? (
        <All></All>
      ) : props.current == "AddFriend" ? (
        <AddFriends></AddFriends>
      ) : null}
      <ActiveNow></ActiveNow>
    </section>
  );
};

export default HomeBody;
