const controls = `
<div class="plyr__controls">
    <button type="button" class="plyr__control" data-plyr="restart">
        <svg role="presentation"><use xlink:href="#plyr-restart"></use></svg>
        <span class="plyr__tooltip" role="tooltip">Restart</span>
    </button>
    <button type="button" class="plyr__control" data-plyr="rewind">
        <svg role="presentation"><use xlink:href="#plyr-rewind"></use></svg>
        <span class="plyr__tooltip" role="tooltip">Rewind {seektime} secs</span>
    </button>
    <button type="button" class="plyr__control" aria-label="Play, {title}" data-plyr="play">
        <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-pause"></use></svg>
        <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-play"></use></svg>
        <span class="label--pressed plyr__tooltip" role="tooltip">Pause</span>
        <span class="label--not-pressed plyr__tooltip" role="tooltip">Play</span>
    </button>
    <button type="button" class="plyr__control" data-plyr="fast-forward">
        <svg role="presentation"><use xlink:href="#plyr-fast-forward"></use></svg>
        <span class="plyr__tooltip" role="tooltip">Forward {seektime} secs</span>
    </button>
    <div class="plyr__progress">
        <input data-plyr="seek" type="range" min="0" max="100" step="0.01" value="0" aria-label="Seek">
        <progress class="plyr__progress__buffer" min="0" max="100" value="0">% buffered</progress>
        <span role="tooltip" class="plyr__tooltip">00:00</span>
    </div>
    <div class="plyr__time plyr__time--current" aria-label="Current time">00:00</div>
    <div class="plyr__time plyr__time--duration" aria-label="Duration">00:00</div>
    <button type="button" class="plyr__control" aria-label="Mute" data-plyr="mute">
        <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-muted"></use></svg>
        <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-volume"></use></svg>
        <span class="label--pressed plyr__tooltip" role="tooltip">Unmute</span>
        <span class="label--not-pressed plyr__tooltip" role="tooltip">Mute</span>
    </button>
    <div class="plyr__volume">
        <input data-plyr="volume" type="range" min="0" max="1" step="0.05" value="1" autocomplete="off" aria-label="Volume">
    </div>
    <button type="button" class="plyr__control" data-plyr="captions">
        <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-captions-on"></use></svg>
        <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-captions-off"></use></svg>
        <span class="label--pressed plyr__tooltip" role="tooltip">Disable captions</span>
        <span class="label--not-pressed plyr__tooltip" role="tooltip">Enable captions</span>
    </button>
    <button type="button" class="plyr__control" data-plyr="fullscreen">
        <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-exit-fullscreen"></use></svg>
        <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-enter-fullscreen"></use></svg>
        <span class="label--pressed plyr__tooltip" role="tooltip">Exit fullscreen</span>
        <span class="label--not-pressed plyr__tooltip" role="tooltip">Enter fullscreen</span>
    </button>
</div>
`;

// Setup the player

const getRandomPin = (chars, len) =>
  [...Array(len)]
    .map((i) => chars[Math.floor(Math.random() * chars.length)])
    .join("");

let players = [];

document.addEventListener("DOMContentLoaded", function () {
  const containers = document.querySelectorAll(".container");
  // const video = document.querySelector('#video');
  // const overlay = document.querySelector(".overlayFade");
  // const playButton = document.querySelector('.play-button');
  // const box = document.querySelector('.box');
  // const _box = document.querySelector('._box');

  for (i = 0; i < containers.length; i++) {
    container = containers[i];
    randomized = getRandomPin("0123456789", 4);
    let video = container.querySelector("video");

    video.setAttribute("id", "video-" + randomized);
    players[i] = new Plyr("#video-" + randomized, {
      controls,
    });
    let player = players[i];
    /*     player.on("play", (event) => {
      player.controls = [
        "play-large",
        "play",
        "volume",
        "fullscreen",
        "progress",
      ];
    }); */
    container.addEventListener("click", function (event) {
      let counter = 0;

      let video = this.querySelector("video");
      let plyr = this.querySelector(".plyr");
      video.tabIndex = 1;
      // player.toggleControls();
      let overlay = this.querySelector(".overlayFade");
      let playButton = this.querySelector(".play-button");
      let box = this.querySelector(".box");
      let _box = this.querySelector("._box");

      const escapehandler = function (event) {
        let key = event.key; // Or const {key} = event; in ES6+
        if (key === "Escape") {
          player.pause();
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

          //   event.preventDefault();
        }
      };

      console.log(event.target);
      if (event.target.className == "play-button") {
        box.classList.add("box-disabled");
        _box.classList.add("box-opened");
        overlay.style.display = "none";
        container.classList.add("container-disabled");
        // video.classList.add("video-opened");
        // video.tabIndex = 1;

        let playButtons = document.querySelectorAll(".play-button");

        // playButtons.tabIndex = -1;
        // $(".play-button").css("user-select", "none");
        // $(".play-button").attr("tabindex", "-1");

        // containers.tabIndex = -1;
        // $(".container").css("user-select", "none");
        // $(".container").attr("tabindex", "-1");

        let menuLinks = document.querySelectorAll(".menu-link");
        // menuLinks.tabIndex = -1;
        // $(".menu-link").css("user-select", "none");
        // $(".menu-link").attr("tabindex", "-1");

        player.play();
        plyr.focus();

        document.addEventListener("keydown", escapehandler, true);
      }
      if (event.target.className.includes("_box")) {
        player.play();
        box.classList.remove("box-disabled");
        _box.classList.remove("box-opened");
        overlay.style.display = "block";
        container.classList.remove("container-disabled");
        // video.classList.remove("video-opened");
        document.removeEventListener("keydown", escapehandler);
      }
    });
  }
  // playButton.addEventListener('click', function() {

  // });

  /*     container.addEventListener('mouseenter', function() {
        overlay.style.display = 'flex';
    });

    videoContainer.addEventListener('mouseleave', function() {
        overlay.style.display = 'none';
    }); */
});
