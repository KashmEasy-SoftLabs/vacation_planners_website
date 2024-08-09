const video = document.getElementById('myVideo');
        const playPauseControl = document.getElementById('playPauseControl');
        const playPauseIcon = playPauseControl.querySelector('img');

        function togglePlayPause() {
            if (video.paused) {
                video.play();
               
               playPauseIcon.classList.add("remove-icon")
                // Update to pause icon
            } else {
                video.pause();
                playPauseIcon.classList.remove("remove-icon")
                playPauseIcon.src = 'images/pause.png'; // Update to play icon
            }
        }

        playPauseControl.addEventListener('click', togglePlayPause);