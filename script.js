Scroll of Dominion - script.js with Audio FX
document.addEventListener("DOMContentLoaded", function () {
  const xpFill = document.querySelector(".xp-fill");

  // Load audio elements
  const scrollBotAudio = new Audio("https://www.myinstants.com/media/sounds/anime-wow-sound-effect.mp3");
  const cryptoSealAudio = new Audio("https://www.myinstants.com/media/sounds/power-up.mp3");
  const xpCircleAudio = new Audio("https://www.myinstants.com/media/sounds/level-up.mp3");

  function triggerXPAnimation() {
    xpFill.style.transition = "none";
    xpFill.style.width = "0%";
    void xpFill.offsetWidth;
    xpFill.style.transition = "width 1s ease-in-out";
    xpFill.style.width = "100%";

    setTimeout(() => {
      xpFill.style.transition = "width 0.5s ease-in-out";
      xpFill.style.width = "80%";
    }, 2000);
  }

  document.querySelector(".scroll-btn:nth-of-type(1)").onclick = function () {
    scrollBotAudio.play();
    triggerXPAnimation();
  };

  document.querySelector(".scroll-btn:nth-of-type(2)").onclick = function () {
    cryptoSealAudio.play();
    triggerXPAnimation();
  };

  document.querySelector(".scroll-btn:nth-of-type(3)").onclick = function () {
    xpCircleAudio.play();
    triggerXPAnimation();
  };
});
ok ok
