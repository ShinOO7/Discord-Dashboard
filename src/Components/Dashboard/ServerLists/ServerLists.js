import style from "./ServerLists.module.css";
import { useContext, useEffect, useState } from "react";
import DashboardContext from "../../Store/DashboardData";
import ServerIcon from "./ServerIcon";

const ServerLists = () => {
  const data = useContext(DashboardContext).data;

  const len = data.length;

  const [currentElement, setCurrentElement] = useState("empty");

  const addClass = (element) => {
    if (element != currentElement) {
      element.className += ` ${style.active}`;
      if (currentElement) currentElement.className = style.serverIcon;
    }
    setCurrentElement(element);
  };

  useEffect(() => {
    setCurrentElement(document.getElementById("0"));
  }, []);

  return (
    <aside className={style.serverBar}>
      {data.map((server, index) => {
        return (
          <>
            <ServerIcon
              length={len}
              classChange={addClass}
              key={`${server.serverName}^${index}`}
              id={index}
              info={server.serverName}
            ></ServerIcon>
            {index == 0 || index == data.length - 2 ? (
              <div className={style.partitionBorder}></div>
            ) : null}
          </>
        );
      })}
    </aside>
  );
};

export default ServerLists;
