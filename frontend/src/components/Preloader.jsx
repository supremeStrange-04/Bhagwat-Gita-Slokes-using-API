// https://drive.google.com/drive/folders/1HR_KtkUYetbSIaXBjzvayoaan5fpRnsu
// https://www.youtube.com/watch?v=Q-IElFWTVhk


import React, { useEffect, useState } from "react";
import featherImage from "../assets/p1.png"; // Import your feather image
import "../styles/preloader.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Preloader = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 4000); // Set a timeout for the preloader animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`bg-[url('../assets/Background.jpg')] z-10 preloader ${showPreloader ? 'show' : 'hide'}`}>
      <h2 data-aos="fade-up" className="font-semibold text-6xl text-amber-800 z-20 absolute flex justify-center ">₰ Bagwat Gita Shlok ₰</h2>
      <img
        className="feather z-30"
        src={featherImage}
        alt="Feather"
        style={{ animation: "fall 3s forwards" }}
      />
    </div>
  );
};

export default Preloader;
