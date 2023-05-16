export default function confirm_expiration(time_to_expiration) {
  const now = new Date();
  const when_expires = localStorage.getItem("expiration");

  if (when_expires !== "null") {
    console.log("expires: ", when_expires);
  }

  if (now.getTime() > time_to_expiration) {
    // localStorage.setItem("expiration", "expired");

    console.log("expires: ", "expired");
  }
}
