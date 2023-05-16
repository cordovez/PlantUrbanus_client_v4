// "use client";

import { createContext, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import set_expiration from "@/utils/set_expiration";
import confirm_expiration from "@/utils/confirm_expiration";

export const UserContext = createContext(null);

export const UserProvider = (props) => {
  const initialRender = useRef(true);

  const router = useRouter();
  const [token, setToken] = useState(null);
  const [expiration, setExpiration] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // What happens when navigating to any page other than login with a null token
  useEffect(() => {
    if (router.pathname !== "/" && token === "null") {
      router.push("/");
    } else {
      setIsLoading(false);
      confirm_expiration(expiration);
    }
  }, [token, router, expiration]);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    if (typeof window !== "undefined") {
      window.localStorage.setItem("userToken", token);
      window.localStorage.setItem("expiration", expiration);
    }
  }, [token, expiration]);

  if (isLoading) {
    return <p>content is loading ...</p>;
  }
  console.log("user context: ", UserContext);
  return (
    <UserContext.Provider value={[token, setToken, expiration, setExpiration]}>
      {props.children}
    </UserContext.Provider>
  );
};

// Note: for localStorage persistence, see this discussion: https://stackoverflow.com/questions/73271093/localstorage-resets-to-empty-on-refresh-in-nextjs
