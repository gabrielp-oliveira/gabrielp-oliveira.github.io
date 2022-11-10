import { createContext, useState } from "react";

export const VersionContext = createContext('old');

export default function VersionProvider({ children }) {
  const [Version, SetVersion] = useState('old');

  return (
    <VersionContext.Provider
      value={{
        Version,
        SetVersion
      }}
    >
      {children}
    </VersionContext.Provider>
  );
}

