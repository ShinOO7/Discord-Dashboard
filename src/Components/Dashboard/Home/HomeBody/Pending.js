import PendingUser from "../../../SVG/PendingUser";
import style from "./HomeBody.module.css";

const Pending = () => {
  return (
    <section className={style.container}>
      <div>
        <PendingUser></PendingUser>
        <p>There are no pending frined requests. Here's Wumpus for now.</p>
      </div>
    </section>
  );
};

export default Pending;
