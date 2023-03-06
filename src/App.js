import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Dashboard from "./Components/Dashboard/Dashboard";
import UserContext from "./Components/Store/UserContext";
import DiscordLogo from "./Components/SVG/DiscordLogo";

const user = [
  {
    userName: "SHIN007",
    userId: "#2197",
    userIcon: <DiscordLogo></DiscordLogo>,
  },
  {
    userName: "Avesh pratap singh",
    userId: "#7592",
    userIcon: <DiscordLogo></DiscordLogo>,
  },
  {
    userName: "iAmAnOob",
    userId: "#1497",
    userIcon: <DiscordLogo></DiscordLogo>,
  },
  {
    userName: "RockTRX",
    userId: "#2979",
    userIcon: <DiscordLogo></DiscordLogo>,
  },
];

function App() {
  return (
    <UserContext.Provider value={user}>
      {/* <Login></Login> */}
      {/* {<Register></Register>} */}
      <Dashboard></Dashboard>
    </UserContext.Provider>
  );
}

export default App;
