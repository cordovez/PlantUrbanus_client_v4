export default function confirm_expiration(time_to_expiration) {
  const now = new Date();

  if (now.getTime() > time_to_expiration) {
    localStorage.setItem("expires", "expired");
    console.log("expired");
  }
}
