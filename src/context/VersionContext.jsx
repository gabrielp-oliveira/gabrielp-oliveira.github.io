import { createContext, useState } from "react";

export const VersionContext = createContext({});

export default function VersionProvider({ children }) {
  const [Version, SetVersion] = useState('new');

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

