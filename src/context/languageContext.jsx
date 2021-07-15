import { createContext, useState } from "react";

export const LanguageContext = createContext({});

export default function LanguegeProvider({ children }) {
  const [Language, SetLanguage] = useState('eng');

  return (
    <LanguageContext.Provider
      value={{
        Language,
        SetLanguage
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

