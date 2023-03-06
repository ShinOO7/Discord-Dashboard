import ServerContext from "../../../Store/ServerContext";
import ChannelContext from "../../../Store/ChannelContext";
import Members from "./Members";
import { useContext } from "react";
import ChannelText from "./ChannelText";
import style from "../Server.module.css";

const ChannelBody = () => {
  const serverData = useContext(ServerContext);

  return (
    <ChannelContext.Provider
      value={{
        members: serverData.channels[serverData.currentChannel].membersId,
        chatHistory: serverData.channels[serverData.currentChannel].textHistory,
      }}
    >
      <article className={style.channelBody}>
        <ChannelText></ChannelText>
        <Members></Members>
      </article>
    </ChannelContext.Provider>
  );
};

export default ChannelBody;
