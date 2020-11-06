export const isDesktop = () => {
  if (typeof window === "undefined") {
    return false;
  }
  const mq = window.matchMedia("(min-width: 768px)");
  console.log("000000");
  return mq.matches;
};
