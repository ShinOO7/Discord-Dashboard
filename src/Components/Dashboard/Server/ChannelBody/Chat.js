import style from "../Server.module.css";

const Chat = (props) => {
  return props.newUser ? (
    <div className={style.chat}>
      <div>{props.icon}</div>
      <div>
        <h2>{props.user}</h2>
        <p>{props.text}</p>
      </div>
    </div>
  ) : (
    <p className={style.prevChat}>{props.text}</p>
  );
};

export default Chat;
