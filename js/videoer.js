document.addEventListener("DOMContentLoaded", function () {
  const containers = document.querySelectorAll(".container");
  // const video = document.querySelector('#video');
  // const overlay = document.querySelector(".overlayFade");
  // const playButton = document.querySelector('.play-button');
  // const box = document.querySelector('.box');
  // const _box = document.querySelector('._box');

  for (i = 0; i < containers.length; i++) {
    container = containers[i];

    container.addEventListener("click", function (event) {
      let counter = 0;

      let video = this.querySelector(".video");
      /*       let player = new Plyr.setup(".js-player");
       */
      let overlay = this.querySelector(".overlayFade");
      let playButton = this.querySelector(".play-button");
      let box = this.querySelector(".box");
      let _box = this.querySelector("._box");

      const escapehandler = function (event) {
        let key = event.key; // Or const {key} = event; in ES6+
        if (key === "Escape") {
          video.pause();
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
        // menuLinks.tabIndex = -1;
        // $(".menu-link").css("user-select", "none");
        // $(".menu-link").attr("tabindex", "-1");

        video.play();
        video.focus();

        video.addEventListener("keydown", escapehandler, true);
      }
      if (event.target.className.includes("_box")) {
        video.pause();
        box.classList.remove("box-disabled");
        _box.classList.remove("box-opened");
        overlay.style.display = "block";
        container.classList.remove("container-disabled");
        video.classList.remove("video-opened");
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
