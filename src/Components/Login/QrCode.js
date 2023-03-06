import style from "./Login.module.css";
import qrCode from "../../Assets/Login/QR_CODE.png";
import DiscordIcon from "../../Components/SVG/DiscordIcon";

const QrCode = () => {
  return (
    <div className={style.qr}>
      <div className={style["sub-container"]}>
        <img src={qrCode} alt="Qr code for login" />
        <DiscordIcon />
      </div>
      <div className={style["sub-container"]}>
        <h2>Log in with QR Code</h2>
        <p>
          Scan this with the <span>Discord mobile app</span> to log in
          instantly.
        </p>
      </div>
    </div>
  );
};

export default QrCode;
