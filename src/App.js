import React, { useEffect, useState, useContext } from "react";

import OldApp from "./OldApp";
import NewApp from "./NewApp";
import { VersionContext } from "./context/VersionContext";

import api from "./api/checkVisit";

function App() {
  const [appVersion, setAppversion] = useState();
  const [status, setstatus] = useState(false);
  const { Version } = useContext(VersionContext);

  useEffect(() => {
    console.log(window);

    // const user = localStorage.getItem("user");
    
    // if (user) {
    //   const currentTime = Date.now()
    //   const time = currentTime - user
    //   const now = new Date(time).getMinutes();
    //   console.log(now)
    //   if(now >= 5){
    //     api.post("/", { data: now })
    //     .then(() => {
    //       localStorage.setItem('user', JSON.stringify(currentTime));
    //     }); 
    //   }
    // }else{
    //   const currentTime = Date.now()
    //   api.post("/", { data: 0 })
    //   .then(() => {
    //     localStorage.setItem('user', JSON.stringify(currentTime));
    //   }); 

    // }
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
