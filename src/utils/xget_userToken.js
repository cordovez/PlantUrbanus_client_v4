import { useRef } from "react";

export default function useGetUserToken() {
  const initialRender = useRef(true);
  let user;
  if (typeof window !== "undefined") {
    const userToken = localStorage.getItem("userToken");
    if (userToken !== null) {
      user = userToken;
    }
  }

  if (initialRender.current) {
    initialRender.current = false;
    return;
  }
  if (typeof window !== "undefined") {
    window.localStorage.setItem("userToken", user);
  }
  return user;
}
