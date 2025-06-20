const pageLinks = document.querySelectorAll("#header-menu a");

// Highlights current page in navbar

document.addEventListener("DOMContentLoaded", function () {
    const urlArr = window.location.href.split('/');

    const currPage = urlArr[urlArr.length - 1];

    pageLinks.forEach((link) => {
        if (link.id === currPage) {
            link.classList.toggle('current-nav');
        }
    })

});

// Taken from: https://benfrain.com/automatically-play-and-pause-video-as-it-enters-and-leaves-the-viewport-screen/
function playPauseVideo() {
    let videos = document.querySelectorAll("video");
    videos.forEach((video) => {
        // We can only control playback without insteraction if video is mute
        video.muted = true;
        // Play is a promise so we need to check we have it
        let playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.then((_) => {
                let observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (
                                entry.intersectionRatio !== 1 &&
                                !video.paused
                            ) {
                                video.pause();
                            } else if (video.paused) {
                                video.play();
                            }
                        });
                    },
                    { threshold: 0.2 }
                );
                observer.observe(video);
            });
        }
    });
}

playPauseVideo();


