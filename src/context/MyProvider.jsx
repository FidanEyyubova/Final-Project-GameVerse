import React, { createContext, useState } from "react";

export const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [game, setGame] = useState([]);

  return (
    <MyContext.Provider value={{ game, setGame }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
