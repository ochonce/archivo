document.addEventListener("DOMContentLoaded", () => {
  const videos = [
    "video1.mp4",
    "video2.mp4",
    "video3.mp4",
    "video4.mp4"
  ];

  const video = document.getElementById("bgVideo");

  if (!video) return;

  const randomVideo = videos[Math.floor(Math.random() * videos.length)];

  video.src = randomVideo;
  video.load();
  video.play().catch(() => {
    // fallback silencioso por autoplay policies
  });
});
