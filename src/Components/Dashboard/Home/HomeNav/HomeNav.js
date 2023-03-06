import Friends from "../../../SVG/Friends";
import Inbox from "../../../SVG/Inbox";
import QuestionMark from "../../../SVG/QuestionMark";
import style from "../Home.module.css";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

const HomeNav = (props) => {
  const elements = ["Online", "All", "Pending", "Blocked", "Add Friend"];

  const [prevElement, setPrevElement] = useState(null);

  const onClickHandler = (event) => {
    props.bodyChange(event.target.innerHTML);
    classChange(event.target);
  };

  const classChange = (element) => {
    if (prevElement) prevElement.classList.remove(`${style.activeBtn}`);
    element.classList.add(`${style.activeBtn}`);
    setPrevElement(element);
  };

  useEffect(() => {
    let initial = document.getElementById("initial");
    initial.classList.add(`${style.activeBtn}`);
    setPrevElement(initial);
  }, []);

  return (
    <nav className={style.navigation}>
      <ul>
        <li>
          <Friends></Friends>
          <span>Friends</span>
        </li>
        <span className={style.navPartition}></span>
        {elements.map((element, index) => (
          <button
            id={index == 0 ? `initial` : null}
            key={`${element}+${index}`}
            onClick={onClickHandler}
          >
            {element}
          </button>
        ))}
      </ul>
      <div>
        <i className="fas fa-comment-alt"></i>
        <span className={style.navPartition}></span>
        <Inbox></Inbox>
        <QuestionMark></QuestionMark>
      </div>
    </nav>
  );
};

export default HomeNav;
