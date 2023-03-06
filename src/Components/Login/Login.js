import style from "./Login.module.css";
import Card from "../UI/Card/Card";
import LoginForm from "./LoginForm";
import QrCode from "./QrCode";
import ReactDOM from "react-dom";
import LoginBg from "../SVG/LoginBg";
import DiscordLogo from "../SVG/DiscordLogo";

const Login = () => {
  const onClickHandler = () => {};

  const onPasswordChangeHandler = () => {};

  const onEmailChangeHandler = () => {};

  return (
    <Card className={style.login}>
      {ReactDOM.createPortal(<LoginBg />, document.getElementById("bg"))}
      {ReactDOM.createPortal(
        <div className={style.logo}>
          <DiscordLogo></DiscordLogo>
          <h2>Discord</h2>
        </div>,
        document.getElementById("bg")
      )}
      <div className={style["login-container"]}>
        <LoginForm
          emailChange={onEmailChangeHandler}
          passwordChange={onPasswordChangeHandler}
          onClick={onClickHandler}
        ></LoginForm>
        <QrCode></QrCode>
      </div>
    </Card>
  );
};

export default Login;
