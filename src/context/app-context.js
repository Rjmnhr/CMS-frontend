import { createContext, useContext, useState } from "react";

export const MyContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [featuredData, setFeaturedData] = useState([]);
  const [contentData, setContentData] = useState([]);
  const [isContentUpdated, setIsContentUpdated] = useState(false);

  const value = {
    featuredData,
    setFeaturedData,
    contentData,
    setContentData,
    isContentUpdated,
    setIsContentUpdated,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export const useApplicationContext = () => {
  return useContext(MyContext);
};
