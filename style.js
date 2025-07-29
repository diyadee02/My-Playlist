    const audio = document.getElementById("audioPlayer");
    const source = document.getElementById("audioSource");

    function setAudio(file) {
      source.src = file;
      audio.load();
      audio.play();
    }

    function playAudio() {
      audio.play();
    }

    function stopAudio() {
      audio.pause();
      audio.currentTime = 0;
    }

    function toggleSubList(el) {
      let next = el.nextElementSibling;
      while (next && next.classList.contains('sub-track')) {
        next.style.display = next.style.display === 'table-row' ? 'none' : 'table-row';
        next = next.nextElementSibling;
      }
    }