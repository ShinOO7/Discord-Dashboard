import BlockedUser from "../../../SVG/BlockedUser";
import style from "./HomeBody.module.css";

const Blocked = () => {
  return (
    <section className={style.container}>
      <div>
        <BlockedUser></BlockedUser>
        <p>You can't unblock the Wumpus</p>
      </div>
    </section>
  );
};

export default Blocked;
