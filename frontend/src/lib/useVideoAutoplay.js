import { useEffect } from "react";

// https://stackoverflow.com/a/63887052/1977850
export function useVideoAutoplay({ threshold = 0.8 } = {}) {
  function checkScroll() {
    const videos = document.getElementsByTagName("video");

    for (let i = 0; i < videos.length; i++) {
      const video = videos[i];

      const x = video.offsetLeft;
      const y = video.offsetTop;
      const w = video.offsetWidth;
      const h = video.offsetHeight;
      const r = x + w; // right
      const b = y + h; // bottom

      const visibleX = Math.max(
        0,
        Math.min(
          w,
          window.pageXOffset + window.innerWidth - x,
          r - window.pageXOffset
        )
      );
      const visibleY = Math.max(
        0,
        Math.min(
          h,
          window.pageYOffset + window.innerHeight - y,
          b - window.pageYOffset
        )
      );

      const visible = (visibleX * visibleY) / (w * h);

      if (visible > threshold) {
        video.play();
      } else {
        video.pause();
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", checkScroll, false);
    window.addEventListener("resize", checkScroll, false);
    return () => {
      window.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);
}
