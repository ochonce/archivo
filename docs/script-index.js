const videos = [
  "video1.mp4",
  "video2.mp4",
  "video3.mp4",
  "video4.mp4"
];

const video = document.getElementById("bg-video");

const elegido = videos[Math.floor(Math.random() * videos.length)];

video.src = elegido;
video.load();

video.play().catch(() => {
  video.muted = true;
  video.play();
});
