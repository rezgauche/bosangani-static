(function () {

    window.onload = function () {
        var video = document.getElementById('delayed-video');
        video.src = 'img/bosangani2023-reel.mp4'; // Set the video source
        video.oncanplay = function () {
            video.classList.add('loaded'); // Fade in video once it's ready to play
        };
    };
})();