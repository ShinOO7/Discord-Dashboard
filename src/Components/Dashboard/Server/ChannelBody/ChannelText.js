import { useContext, useState } from "react";
import ChannelContext from "../../../Store/ChannelContext";
import Input from "./Input";
import Chat from "./Chat";
import UserContext from "../../../Store/UserContext";
import style from "../Server.module.css";
import ServerContext from "../../../Store/ServerContext";

const Body = () => {
  const serverData = useContext(ServerContext);
  const channelData = useContext(ChannelContext);
  const userData = useContext(UserContext);

  return (
    <article className={style.textSection}>
      <div className={style.chatContainer}>
        <div className={style.chatStart}>
          <div>
            <span>#</span>
          </div>
          <h3>
            Welcome to #
            {serverData.channels[serverData.currentChannel].channelName}
          </h3>
          <p>
            This is the satrt of the <span> </span>
            {serverData.channels[serverData.currentChannel].channelName}{" "}
            <span> </span>
            channel
          </p>
        </div>
        {channelData.chatHistory.map((data, index) => {
          const user = userData.find((user) => user.userName == data.writter);
          return index > 0 &&
            channelData.chatHistory[index - 1].writter == data.writter ? (
            <Chat
              key={`${data.writter}+${index}`}
              user={data.writter}
              text={data.text}
              icon={user.userIcon}
              newUser={false}
            ></Chat>
          ) : (
            <Chat
              key={`${data.writter}+${index}`}
              user={data.writter}
              text={data.text}
              icon={user.userIcon}
              newUser={true}
            ></Chat>
          );
        })}
      </div>

      <Input></Input>
    </article>
  );
};

export default Body;
