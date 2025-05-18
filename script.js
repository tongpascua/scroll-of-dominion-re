document.addEventListener("DOMContentLoaded", function () {
  const xpFill = document.querySelector(".xp-fill");

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

  const scrollButtons = document.querySelectorAll(".scroll-btn");

  scrollButtons[0].addEventListener("click", function () {
    scrollBotAudio.play();
    triggerXPAnimation();
  });

  scrollButtons[1].addEventListener("click", function () {
    cryptoSealAudio.play();
    triggerXPAnimation();
  });

  scrollButtons[2].addEventListener("click", function () {Final scroll FX + XP trigger fix

    xpCircleAudio.play();
    triggerXPAnimation();
  });
});
