import NoOnline from "../../../SVG/NoOnline";
import style from "./HomeBody.module.css";

const Online = () => {
  return (
    <section className={style.container}>
      <div>
        <NoOnline></NoOnline>
        <p>No one's around to play with Wumpus</p>
      </div>
    </section>
  );
};

export default Online;
