// "use client";

import { createContext, useEffect, useRef, useState } from "react";

export const UserContext = createContext(null);

// let userToken = "";
export const UserProvider = (props) => {
  const initialRender = useRef(true);

  const [token, setToken] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userToken = localStorage.getItem("userToken");
      if (userToken !== null) {
        setToken(userToken);
      }
    }
  }, []);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    if (typeof window !== "undefined") {
      window.localStorage.setItem("userToken", token);
    }
  }, [token]);

  return (
    <UserContext.Provider value={[token, setToken]}>
      {props.children}
    </UserContext.Provider>
  );
};

// Note: for localStorage persistence, see this discussion: https://stackoverflow.com/questions/73271093/localstorage-resets-to-empty-on-refresh-in-nextjs
