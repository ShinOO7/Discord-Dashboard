import style from "../Server.module.css";
const Member = (props) => {
  return (
    <div className={style.member}>
      <div>{props.userData.userIcon}</div>
      <span>{props.userData.userName}</span>
    </div>
  );
};
export default Member;
