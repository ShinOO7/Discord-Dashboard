import style from "./Register.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import InputList from "../UI/Input/InputList";

const RegisterForm = (props) => {
  return (
    <div className={style.form}>
      <div className={style["sub-container"]}>
        <Input
          type="email"
          id="register-email"
          label="EMAIL"
          className={style.input}
        ></Input>
      </div>
      <div className={style["sub-container"]}>
        <Input
          type="text"
          id="register-username"
          label="USERNAME"
          className={style.input}
        ></Input>
      </div>
      <div className={style["sub-container"]}>
        <Input
          type="password"
          id="register-password"
          label="PASSWORD"
          className={style.input}
        ></Input>
      </div>
      <div className={style["sub-container"]}>
        <label>DATE OF BIRTH</label>
        <div className={style["inputlist-container"]}>
          <InputList
            list="date"
            className={style.inputlist}
            options={[...Array(31)].map((opt, index) => {
              return index + 1;
            })}
          ></InputList>
          <InputList
            list="month"
            className={style.inputlist}
            options={[
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ]}
          ></InputList>
          <InputList
            list="year"
            className={style.inputlist}
            options={[...Array(150)].map((n, index) => {
              return 2019 - index;
            })}
          ></InputList>
        </div>
      </div>
      <div className={style["sub-container"]}>
        <Button click={props.onClick}>Continue</Button>
        <a href="#!">Already have an account?</a>
      </div>
    </div>
  );
};

export default RegisterForm;
