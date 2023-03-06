import ServerLists from "./ServerLists/ServerLists";
import Server from "./Server/Server";
import DashboardContext from "../Store/DashboardData";
import { useState } from "react";
import DiscordLogo from "../SVG/DiscordLogo";
import Home from "./Home/Home.js";
import style from "./Dashboard.module.css";

const Dashboard = () => {
  const [currentServer, setCurrentServer] = useState(0);

  const onServerChangeHandler = (curr) => {
    setCurrentServer(curr);
  };

  const dashboardData = [
    {
      serverName: {
        name: "Discord",
        initials: "Home",
        icon: <DiscordLogo></DiscordLogo>,
      },
      DMMembers: [
        {
          memberName: "RockTRX",
          chatHistory: [
            {
              writter: "RockTRX",
              text: "Are you comming for a game session",
            },
            { writter: "SHIN007", text: "i will join guys in a min" },
            { writter: "RockTRX", text: "ok" },
            { writter: "SHIN007", text: "give a call to jay too." },
            { writter: "RockTRX", text: "he was online a minute ago" },
            { writter: "SHIN007", text: "ok" },
          ],
        },
        {
          memberName: "IAmANOob",
          chatHistory: [
            { writter: "IAmANOob", text: "We are online try to join fast" },
            { writter: "SHIN007", text: "just a sec" },
            { writter: "IAmANOob", text: "how long will you take" },
            { writter: "SHIN007", text: "10 mins." },
            { writter: "IAmANOob", text: "ok" },
          ],
        },
      ],
    },
    {
      serverName: {
        name: "Lemonade Group",
        initials: "LG",
        icon: null,
      },
      serverChannels: [
        {
          channelName: "general",
          membersId: ["SHIN007", "Avesh pratap singh", "iAmAnOob", "RockTRX"],
          textHistory: [
            { writter: "SHIN007", text: "Hello" },
            { writter: "Avesh pratap singh", text: "how are you" },
            { writter: "SHIN007", text: "i a, fine what about you" },
            {
              writter: "Avesh pratap singh",
              text: "i am good to, so what are you guys uptoo",
            },
            { writter: "RockTRX", text: "netlfix & chill" },
            {
              writter: "SHIN007",
              text: "enjoy",
            },
          ],
        },
        {
          channelName: "session-planning",
          membersId: ["SHIN007", "Avesh pratap singh", "iAmAnOob", "RockTRX"],
          textHistory: [],
        },
        {
          channelName: "off-topic",
          membersId: ["Avesh pratap singh", "iAmAnOob", "RockTRX"],
          textHistory: [],
        },
      ],
    },
    {
      serverName: {
        name: "SHIN007's server",
        initials: "Ss",
        icon: null,
      },
      serverChannels: [
        {
          channelName: "general",
          membersId: ["SHIN007", "iAmAnOob", "RockTRX"],
          textHistory: [
            { writter: "SHIN007", text: "kitne baje aoge on" },
            { writter: "SHIN007", text: "gta khelte aj" },
            { writter: "SHIN007", text: "maja aega" },
            {
              writter: "iAmAnOob",
              text: "ajao me toh ready hun",
            },
            {
              writter: "iAmAnOob",
              text: "Rocky tu aega",
            },
            { writter: "RockTRX", text: "ara me 10min me" },
            { writter: "SHIN007", text: "theek phir milte hain 10 min me" },
            { writter: "SHIN007", text: "me tabh tak nashta kar rah" },
            {
              writter: "iAmAnOob",
              text: "kk",
            },
          ],
        },
        {
          channelName: "Pvt Grp",
          membersId: ["SHIN007", "iAmAnOob", "RockTRX"],
          textHistory: [],
        },
      ],
    },
    {
      serverName: {
        name: "Add a Server",
        initials: "",
        icon: <i className="fas fa-plus"></i>,
      },
    },
    {
      serverName: {
        name: "Explore Public Servers",
        initials: "",
        icon: <i className="fas fa-compass"></i>,
      },
    },
    {
      serverName: {
        name: "Download App",
        initials: "",
        icon: <i className="fas fa-download"></i>,
      },
    },
  ];

  return (
    <DashboardContext.Provider
      value={{
        data: dashboardData,
        current: currentServer,
        serverChange: onServerChangeHandler,
      }}
    >
      <section className={style.dashboard}>
        <ServerLists></ServerLists>
        {currentServer == 0 ? <Home></Home> : <Server></Server>}
      </section>
    </DashboardContext.Provider>
  );
};

export default Dashboard;
