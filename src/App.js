import React, { useEffect, useState, useContext } from "react";

import OldApp from "./OldApp";
import NewApp from "./NewApp";
import { VersionContext } from "./context/VersionContext";
function App() {
  const [appVersion, setAppversion] = useState();
  const [status, setstatus] = useState(false);
  const { Version } = useContext(VersionContext)
  const newApp = <NewApp></NewApp>
  const oldApp = <OldApp></OldApp>
  useEffect(() => {
    if (Version == 'old') {
      setAppversion(oldApp);
    } else {
      setAppversion(newApp);
    }
  }, [Version]);


  return <>
    {appVersion}
  </>;
}

export default App;
