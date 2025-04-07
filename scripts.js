const lerp = (start, end, amount) => start + (end - start) * amount;

const nearSection = () => {
  let min = Infinity;
  let index = 0;

  massive.forEach((el, i) => {
    const sectionTop = document.getElementById(el).offsetTop;
    const distance = Math.abs(window.scrollY - sectionTop);

    if (distance < min) {
      min = distance;
      index = i;
    }
  });

  return index;
};

let animationFrame = null;

const massive = Array.from(document.querySelectorAll('[id^="section"]')).map(
  (el) => el.id,
);

let isScrolling = false;

const scrollToY = (y) => {
  if (animationFrame) cancelAnimationFrame(animationFrame);
  isScrolling = true;

  const scroll = () => {
    const currentY = window.scrollY;
    const targetY = lerp(currentY, y, 0.1);

    scrollTo(0, targetY);

    if (Math.abs(targetY - y) > 8) {
      animationFrame = requestAnimationFrame(scroll);
    } else {
      isScrolling = false;
    }
  };

  scroll();
};

document.addEventListener(
  "wheel",
  (e) => {
    const scrollingId = e.target.id;

    if (scrollingId.startsWith("scrolling")) {
      return;
    }

    let index = nearSection(window.scrollY);
    if (e.deltaY > 0) {
      if (index !== massive.length - 1) index += 1;
      else index = 0;
      let elementPos = document.getElementById(massive[index]).offsetTop;
      scrollToY(elementPos);
    } else {
      if (index !== 0) index -= 1;
      else index = massive.length - 1;
      let elementPos = document.getElementById(massive[index]).offsetTop;
      scrollToY(elementPos);
    }
  },
  { passive: true },
);

function changePicture(src) {
  document.getElementById("main_picture").src = src;
}
