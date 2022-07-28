const scrollProgressElement = document.querySelector(".scroll-progress");

function scrollProgress() {
  const totalHeightOfWebPage = document.body.scrollHeight;
  const currentDistanceFromTop = document.documentElement.scrollTop;

  const windowHeight = document.documentElement.clientHeight;

  const scrollPercentage = (currentDistanceFromTop /
  (totalHeightOfWebPage - currentDistanceFromTop)) * 100;

  scrollProgressElement.style.width = Math.round(scrollPercentage) + "%";
}

document.addEventListener("scroll", scrollProgress);
