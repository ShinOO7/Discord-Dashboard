import ReactDOM from "react-dom";
import style from "./Register.module.css";
import RegisterForm from "./RegisterForm";
import Card from "../UI/Card/Card";
import LoginBg from "../SVG/LoginBg";
import DiscordLogo from "../SVG/DiscordLogo";

const Register = () => {
  return (
    <Card className={style.register}>
      {ReactDOM.createPortal(<LoginBg />, document.getElementById("bg"))}
      {ReactDOM.createPortal(
        <div className={style.logo}>
          <DiscordLogo></DiscordLogo>
          <h2>Discord</h2>
        </div>,
        document.getElementById("bg")
      )}
      <h2>Create an account</h2>
      <RegisterForm></RegisterForm>
      <p>
        By registering, you agree to Discord's
        <a href="#!">Terms of Service</a> and
        <a href="#!">Privacy Policy</a>
      </p>
    </Card>
  );
};

export default Register;
