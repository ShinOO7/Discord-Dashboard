import style from "./Login.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

const LoginForm = (props) => {
  return (
    <div className={style.form}>
      <div className={style["sub-container"]}>
        <h2>Welcome back!</h2>
        <p>We're so excited to see you again!</p>
      </div>
      <div className={style["sub-container"]}>
        <Input
          type="email"
          id="email"
          change={props.emailChange}
          label="EMAIL OR PHONE NUMBER"
          className={style.input}
        ></Input>
      </div>
      <div className={style["sub-container"]}>
        <Input
          type="text"
          id="password"
          change={props.passwordChange}
          label="PASSWORD"
          className={style.input}
        ></Input>
        <a href="#">Forgot your password?</a>
      </div>
      <div className={style["sub-container"]}>
        <Button click={props.onClick}>Login</Button>
        <span>
          Need an account? <a href="">Register</a>{" "}
        </span>
      </div>
    </div>
  );
};

export default LoginForm;
