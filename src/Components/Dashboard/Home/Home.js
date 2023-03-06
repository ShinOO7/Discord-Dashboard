import { useState } from "react/cjs/react.development";
import HomeBar from "./HomeBar/HomeBar";
import HomeNav from "./HomeNav/HomeNav";
import HomeBody from "./HomeBody/HomeBody";
import style from "./Home.module.css";

const Home = () => {
  const [body, setBody] = useState("Online");

  const bodyChangeHandler = (curr) => {
    const currReformed = [...curr]
      .filter((curr) => curr != " ")
      .reduce((total, current) => total + current);
    setBody(currReformed);
  };

  return (
    <section className={style.container}>
      <HomeBar></HomeBar>
      <div className={style.bodyContainer}>
        <HomeNav bodyChange={bodyChangeHandler}></HomeNav>
        <HomeBody current={body}></HomeBody>
      </div>
    </section>
  );
};

export default Home;
