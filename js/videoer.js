/* const getRandomPin = (chars, len) =>
  [...Array(len)]
    .map((i) => chars[Math.floor(Math.random() * chars.length)])
    .join("");
/* 
let players = []; */

/* document.addEventListener("DOMContentLoaded", function () {
  const containers = document.querySelectorAll(".container");
  /*   const video = document.querySelector("#video");
  const overlay = document.querySelector(".overlayFade");
  const playButton = document.querySelector(".play-button");
  const box = document.querySelector(".box");
  const _box = document.querySelector("._box"); */

/* for (i = 0; i < containers.length; i++) {
    container = containers[i];
    randomized = getRandomPin("0123456789", 4);
    let video = container.querySelector("video");

    container.addEventListener("click", function (event) {
      let counter = 0;

      let video = this.querySelector("video");
      video.tabIndex = 1;
      let overlay = this.querySelector(".overlayFade");
      let playButton = this.querySelector(".play-button");
      let box = this.querySelector(".box");
      let _box = this.querySelector("._box");

      const escapehandler = function (event) {
        let key = event.key;
        if (key === "Escape") {
          box.classList.remove("box-disabled");
          _box.classList.remove("box-opened");
          overlay.style.display = "block";
          container.classList.remove("container-disabled");
          video.classList.remove("video-opened");
          container.focus();
          video.removeEventListener("keydown", escapehandler, false);
        }

        if (event.shiftKey && event.key === "Tab") {
          counter--;

          if (counter < 0) {
            video.focus();
            counter = 0;
          }
          console.log(counter);
        } else if (event.key === "Tab") {
          counter++;
          if (counter == 4) {
            video.focus();
            counter = 0;
          }
          console.log(counter);

          //event.preventDefault();
        }
      };

      console.log(event.target);
      if (event.target.className == "play-button") {
        box.classList.add("box-disabled");
        _box.classList.add("box-opened");
        overlay.style.display = "none";
        container.classList.add("container-disabled");
        video.classList.add("video-opened");
        // video.tabIndex = 1;

        let playButtons = document.querySelectorAll(".play-button");

        // playButtons.tabIndex = -1;
        // $(".play-button").css("user-select", "none");
        // $(".play-button").attr("tabindex", "-1");

        // containers.tabIndex = -1;
        // $(".container").css("user-select", "none");
        // $(".container").attr("tabindex", "-1");

        let menuLinks = document.querySelectorAll(".menu-link");
        menuLinks.tabIndex = -1;
        $(".menu-link").css("user-select", "none");
        $(".menu-link").attr("tabindex", "-1");

        /*     player.play(); */
/*   plyr.focus(); */

/*   document.addEventListener("keydown", escapehandler, true);
      }
      if (event.target.className.includes("_box")) {
        player.play();
        box.classList.remove("box-disabled");
        _box.classList.remove("box-opened");
        overlay.style.display = "block";
        container.classList.remove("container-disabled");
        video.classList.remove("video-opened");
        document.removeEventListener("keydown", escapehandler);
      }
    });
  }
});

*/
const getRandomPin = (chars, len) =>
  [...Array(len)]
    .map((i) => chars[Math.floor(Math.random() * chars.length)])
    .join("");

document.addEventListener("DOMContentLoaded", function () {
  const containers = document.querySelectorAll(".container");

  for (i = 0; i < containers.length; i++) {
    container = containers[i];
    let video = container.querySelector("video");
    let originalStyles = {}; // Store the original styles of the video
    let isVideoPlaying = false; // Flag to track video play state

    container.addEventListener("click", function (event) {
      let counter = 0;

      let video = this.querySelector("video");
      video.tabIndex = 1;
      let overlay = this.querySelector(".overlayFade");
      let playButton = this.querySelector(".play-button");
      let box = this.querySelector(".box");
      let _box = this.querySelector("._box");

      const escapehandler = function (event) {
        let key = event.key;
        if (key === "Escape") {
          box.classList.remove("box-disabled");
          _box.classList.remove("box-opened");
          overlay.style.display = "block";
          container.classList.remove("container-disabled");
          video.classList.remove("video-opened");
          container.focus();

          // Restore the original styles
          Object.keys(originalStyles).forEach((style) => {
            video.style[style] = originalStyles[style];
          });

          if (isVideoPlaying) {
            video.pause(); // Pause the video if it's playing
            isVideoPlaying = false;
          }

          video.removeEventListener("keydown", escapehandler, false);
        }

        if (event.shiftKey && event.key === "Tab") {
          counter--;

          if (counter < 0) {
            video.focus();
            counter = 0;
          }
          console.log(counter);
        } else if (event.key === "Tab") {
          counter++;
          if (counter == 4) {
            video.focus();
            counter = 0;
          }
          console.log(counter);
        }
      };

      if (event.target.className == "play-button") {
        box.classList.add("box-disabled");
        _box.classList.add("box-opened");
        overlay.style.display = "none";
        container.classList.add("container-disabled");
        video.classList.add("video-opened");

        // Store the original styles
        originalStyles = {
          width: video.style.width,
          height: video.style.height,
          top: video.style.top,
          left: video.style.left,
          position: video.style.position,
          transform: video.style.transform,
        };

        video.style.width = "60%";
        video.style.height = "auto";
        video.style.top = "50%";
        video.style.left = "50%";
        video.style.position = "relative";
        video.style.transform = "translate(-50%, -50%)";

        video.currentTime = 0; // Reset video playback to the beginning

        if (!isVideoPlaying) {
          video.play(); // Start playing the video automatically if not playing
          isVideoPlaying = true;
        }

        video.addEventListener("click", function () {
          if (isVideoPlaying) {
            video.pause(); // Pause the video if it's playing
            isVideoPlaying = false;
          } else {
            video.play(); // Resume playing the video if paused
            isVideoPlaying = true;
          }
        });

        document.addEventListener("keydown", escapehandler, true);
      }
      if (event.target.className.includes("_box")) {
        box.classList.remove("box-disabled");
        _box.classList.remove("box-opened");
        overlay.style.display = "block";
        container.classList.remove("container-disabled");
        video.classList.remove("video-opened");

        // Restore the original styles
        Object.keys(originalStyles).forEach((style) => {
          video.style[style] = originalStyles[style];
        });

        if (isVideoPlaying) {
          video.pause(); // Pause the video if it's playing
          isVideoPlaying = false;
        }

        document.removeEventListener("keydown", escapehandler);
      }
    });
  }
});
