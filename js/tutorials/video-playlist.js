let listVideo = document.querySelectorAll('.video-list .vid');
        let mainVideo = document.querySelector('.main-video video');
        let title = document.querySelector('.main-video .title');
    
        listVideo.forEach(video => {
            video.addEventListener('click', () => {
                listVideo.forEach(vid => vid.classList.remove('active'));
                video.classList.add('active');
                let src = video.querySelector('video').currentSrc;
                mainVideo.src = src;
                let text = video.querySelector('.title').innerHTML;
                title.innerHTML = text;
            });
        });