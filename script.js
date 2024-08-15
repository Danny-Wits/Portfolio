const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  repeat: true,
  multiplier: 5,
  getDirection: true,
});

scroll.on("scroll", (obj) => {
  const footer = document.querySelector(".footer");

  if (obj.direction == "down") {
    footer.classList.add("remove");
  }
  if (obj.direction == "up") {
    footer.classList.remove("remove");
  }

  const { scroll, limit } = obj;
  const isAtBottom = scroll.y + 20 >= limit.y;
  if (isAtBottom) {
    footer.classList.remove("remove");
  }
});

const scrollToID = (elementId) => {
  const targetElement = document.getElementById(elementId);
  scroll.scrollTo(targetElement);
};
