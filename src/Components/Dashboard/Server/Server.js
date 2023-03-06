import ServerContext from "../../Store/ServerContext";
import DashboardContext from "../../Store/DashboardData";
import { useContext, useState } from "react";
import ServerBar from "./ServerBar/ServerBar";
import ChannelBody from "./ChannelBody/ChannelBody";
import Navigation from "./ServerNav/Navigation";
import style from "./Server.module.css";

const Server = () => {
  const dashContext = useContext(DashboardContext);
  const serverData = dashContext.data[dashContext.current];
  const [channel, setChannel] = useState(0);

  const onChannelChange = (curr) => {
    setChannel(curr);
  };

  return (
    <ServerContext.Provider
      value={{
        serverName: serverData.serverName.name,
        channels: serverData.serverChannels,
        currentChannel: channel,
        changeChannel: onChannelChange,
      }}
    >
      <section className={style.serverContainer}>
        <ServerBar></ServerBar>
        <div className={style.bodyContainer}>
          <Navigation></Navigation>
          <ChannelBody></ChannelBody>
        </div>
      </section>
    </ServerContext.Provider>
  );
};

export default Server;
