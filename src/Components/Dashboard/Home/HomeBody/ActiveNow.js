import style from "./HomeBody.module.css";

const ActiveNow = () => {
  return (
    <section className={style.activeContainer}>
      <h3>Active Now</h3>
      <div>
        <h4>It's quite for now...</h4>
        <p>
          When a friend starts an activity-like playing a game or hanging out on
          voice - we'll show it here
        </p>
      </div>
    </section>
  );
};

export default ActiveNow;
