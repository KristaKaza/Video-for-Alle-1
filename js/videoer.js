
document.addEventListener('DOMContentLoaded', function() {
    const containers = document.querySelectorAll('.container');
    // const video = document.querySelector('#video');
    // const overlay = document.querySelector(".overlayFade");
    // const playButton = document.querySelector('.play-button');
    // const box = document.querySelector('.box');
    // const _box = document.querySelector('._box');
    var escapehandler = function(event) {
        let key = event.key; // Or const {key} = event; in ES6+
        if (key === "Escape") {
            video.pause();
            box.classList.remove("box-disabled");
            _box.classList.remove("box-opened");
            overlay.style.display = "block";
            container.classList.remove("container-disabled");
            video.classList.remove("video-opened");
        }
    }
    for (i = 0; i < containers.length; i++) {
        container = containers[i];
        container.addEventListener('click', function(event) {
            let video = container.querySelector('.video');
            let overlay = container.querySelector(".overlayFade");
            let playButton = container.querySelector('.play-button');
            let box = container.querySelector('.box');
            let _box = container.querySelector('._box');

            var escapehandler = function(event) {
                let key = event.key; // Or const {key} = event; in ES6+
                if (key === "Escape") {
                    video.pause();
                    box.classList.remove("box-disabled");
                    _box.classList.remove("box-opened");
                    overlay.style.display = "block";
                    container.classList.remove("container-disabled");
                    video.classList.remove("video-opened");
                    container.focus();
                    document.removeEventListener("keydown", escapehandler);

                }
            }
            
            console.log(event.target.className);
            if (event.target.className == "play-button"){
                box.classList.add("box-disabled");
                _box.classList.add("box-opened");
                overlay.style.display = "none";
                container.classList.add("container-disabled");
                video.classList.add("video-opened");
                // let boxOpened = document.querySelector('.box-opened');
                
                video.play();
                video.focus();
                document.addEventListener("keydown", escapehandler);
            } // Do nothing
            if (event.target.className.includes("_box")) {
                video.pause();
                box.classList.remove("box-disabled");
                _box.classList.remove("box-opened");
                overlay.style.display = "block";
                container.classList.remove("container-disabled");
                video.classList.remove("video-opened");
                document.removeEventListener("keydown",escapehandler);
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


