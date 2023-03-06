import style from "./Card.module.css";

const Card = (props) => {
  let externalClass = props.className;

  return (
    <section className={`${style.container} ${externalClass}`}>
      {props.children}
    </section>
  );
};

export default Card;
