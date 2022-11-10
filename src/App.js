import React, { useEffect, useContext } from "react";

import OldApp from "./OldApp";
import NewApp from "./NewApp";
import { VersionContext } from "./context/VersionContext";

import api from "./api/checkVisit";

function App() {
  const { Version } = useContext(VersionContext);

  useEffect(() => {
    const user = localStorage.getItem("user");
    
    if (user) {
      const currentTime = Date.now()
      const time = currentTime - user
      const now = new Date(time).getMinutes();
      if(now >= 10){
        api.post("/", { data: now })
        .then(() => {
          localStorage.setItem('user', JSON.stringify(currentTime));
        }); 
      }
    }else{
      const currentTime = Date.now()
      api.post("/", { data: 0 })
      .then(() => {
        localStorage.setItem('user', JSON.stringify(currentTime));
      }); 

    }
  }, []);

  return (
    <>
      {Version == "old" ? <OldApp /> : <NewApp />}
      {/* <NewApp/>
  <OldApp/> */}
    </>
  );
}

export default App;
