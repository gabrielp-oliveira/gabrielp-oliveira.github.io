import React, { useEffect, useState, useContext } from "react";

import OldApp from "./OldApp";
import NewApp from "./NewApp";
import { VersionContext } from "./context/VersionContext";
function App() {
  const [appVersion, setAppversion] = useState();
  const [status, setstatus] = useState(false);
  const { Version } = useContext(VersionContext)
 

  return <>
  {(Version == 'old')? <OldApp/> : <NewApp/>}
  {/* <NewApp/>
  <OldApp/> */}
  </>;
}

export default App;
