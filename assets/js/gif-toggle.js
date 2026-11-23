// document.addEventListener('DOMContentLoaded', function () {
//     const gifImg = document.getElementById('toggle-gif');
//     const staticSrc = gifImg.getAttribute('data-static');
//     let isPlaying = true; // GIF starts as playing
  
//     gifImg.addEventListener('click', function () {
//       if (isPlaying) {
//         gifImg.src = staticSrc; // Stop (show static)
//         isPlaying = false;
//       }
//     //   If you want to allow toggling back to GIF, uncomment below:
//       else {
//         gifImg.src = gifImg.getAttribute('data-animated');
//         isPlaying = true;
//       }
//     });
//   });

document.addEventListener("DOMContentLoaded", function () {
	const videos = document.querySelectorAll("video.click-toggle-video");

	videos.forEach((video) => {
		video.addEventListener("click", function () {
			if (video.paused) {
				video.play();
			} else {
				video.pause();
			}
		});
	});
	
	const toggleImages = document.querySelectorAll("img[data-static][data-animated]");

	toggleImages.forEach((img) => {
		img.addEventListener("click", function () {
			const staticSrc = img.getAttribute("data-static");
			const animatedSrc = img.getAttribute("data-animated");
			const currentSrc = img.getAttribute("src");

			if (currentSrc === animatedSrc) {
				img.setAttribute("src", staticSrc);
			} else {
				img.setAttribute("src", animatedSrc);
			}
		});
	});
});
  
  