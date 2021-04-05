const fullStack = document.querySelector(".fullStack");
const timeLine = new TimelineMax({ delay: 0.5 });
timeLine.fromTo(fullStack, 0.5, { x: "-150%" }, { x: "0%" });

new fullpage("#portfolio", {
  autoScrolling: true,
  navigation: true,
  onLeave: (origin, destination, direction) => {
    const section = destination.item;
    const title = section.querySelector("h1");
    const contactEmail = document.querySelector(".contactEmail");
    const socialMedia = document.querySelector(".socialMedia");
    const timeLine = new TimelineMax({ delay: 0.5 });
    timeLine.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: 0, opacity: 1 });
    timeLine.fromTo(contactEmail, 0.5, { x: "-150%" }, { x: "0%" });
    timeLine.fromTo(socialMedia, 0.5, { x: "-150%" }, { x: "0%" });
    if (destination.index === 1) {
      const aboutMeText = document.querySelectorAll(".aboutMeText");
      timeLine.fromTo(aboutMeText, 0.5, { x: "150%" }, { x: "0%" });
    }
  },
});
