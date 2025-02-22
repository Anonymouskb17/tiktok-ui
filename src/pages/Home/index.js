import React, { useState, useEffect } from "react";

const videos = [
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/movie.mp4",
  "https://www.w3schools.com/html/mov_bbb.mp4",
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event) => {
    if (event.deltaY > 0) {
      setCurrentIndex((prevIndex) =>
        Math.min(prevIndex + 1, videos.length - 1)
      );
    } else {
      setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <video
        src={videos[currentIndex]}
        controls
        autoPlay
        loop
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default Home;
