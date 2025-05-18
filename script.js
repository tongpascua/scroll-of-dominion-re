document.addEventListener("DOMContentLoaded", function () {
  const xpFill = document.querySelector(".xp-fill");

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
    alert("ScrollBot summoned!");
    triggerXPAnimation();
  };

  document.querySelector(".scroll-btn:nth-of-type(2)").onclick = function () {
    alert("Accessing CryptoSeal...");
    triggerXPAnimation();
  };

  document.querySelector(".scroll-btn:nth-of-type(3)").onclick = function () {
    alert("XP Circle Unlocked!");
    triggerXPAnimation();
  };
});
