document.addEventListener('DOMContentLoaded', function () {
    const gifImg = document.getElementById('toggle-gif');
    const staticSrc = gifImg.getAttribute('data-static');
    let isPlaying = true; // GIF starts as playing
  
    gifImg.addEventListener('click', function () {
      if (isPlaying) {
        gifImg.src = staticSrc; // Stop (show static)
        isPlaying = false;
      }
    //   If you want to allow toggling back to GIF, uncomment below:
      else {
        gifImg.src = gifImg.getAttribute('data-animated');
        isPlaying = true;
      }
    });
  });
  
  