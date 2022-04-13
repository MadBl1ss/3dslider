//3D  Scroll

let zSpacing = -1000,
  lastPos = zSpacing / 5,
  $frames = document.getElementsByClassName("frame"),
  frames = [...$frames],
  zVals = [];

window.onscroll = function () {
  let top = document.documentElement.scrollTop,
    delta = lastPos - top;

  lastPos = top;

  frames.forEach(function (elem, i) {
    zVals.push(i * zSpacing + zSpacing);
    zVals[i] += delta * -4;
    let frame = frames[i],
      transform = `translateZ(${zVals[i]}px)`,
      opacity = zVals[i] < Math.abs(zSpacing) / 1.5 ? 1 : 0;
    frame.setAttribute("style", `transform: ${transform}; opacity:${opacity}`);
  });
};

window.scrollTo(0, 1);

//Audio

let soundButton = document.querySelector(".soundbutton"),
  audio = document.querySelector(".audio");

soundButton.addEventListener("click", (e) => {
  soundButton.classList.toggle("paused");
  audio.paused ? audio.play() : audio.pause();
});
