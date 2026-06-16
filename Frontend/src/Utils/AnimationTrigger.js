import gsap from "gsap";

export const wipeIn = (callback) => {
  gsap.to("#page-wipe-curtain", {
    yPercent: -100,
    duration: 0.6,
    ease: "power4.inOut",
    onStart: () => {
      gsap.set("#page-wipe-curtain", { yPercent: 100 });
    },
    onComplete: () => {
      if (callback) callback();
    }
  });
};

export const wipeOut = () => {
  window.scrollTo(0, 0);
  gsap.to("#page-wipe-curtain", {
    yPercent: -200,
    duration: 0.6,
    ease: "power4.inOut",
    delay: 0.2
  });
};