import React, { useState, useEffect } from "react";
import Axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "./components/Button.jsx";
import Audio from "./components/Audio.jsx";
import Preloader from "./components/Preloader.jsx";
import "./styles/App.css";

function App() {
  const [slok, setSlok] = useState([]);
  const [chapter, setChapter] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(false);
      const slokResponse = await Axios.get("/api/slok");
      const chapterResponse = await Axios.get("/api/chapter");
      setSlok(slokResponse.data);
      setChapter(chapterResponse.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 3000 });
    fetchData();
  }, []);

  const handleRefresh = () => {
    fetchData();
  };


  if (error) {
    console.log("Something went Wrong!!");
  }

  return (
    <>
      <Preloader />

      <div className="bg-[url('../assets/Background.jpg')] font-['Laila'] w-[100%] text-center">
        <div>
          <h1 className="text-4xl p-4 text-amber-700 font-medium">
            || Bagwat Gita Shlok ||
          </h1>
        </div>

        {/* div 1 */}
        <div
          className="font-normal text-red-800 mt-14 h-[550px] m-5"
          id="div1"
          data-aos="fade-up"
        >
          <img
            src=".\src\assets\p2.png"
            className="w-[520px] float-right"
            alt="peacock feather"
          />
          <h3 className="leading-7">
            Chapter: {slok.chapter} Verse: {slok.verse}
          </h3>
          <p className="font-semibold leading-10 text-xl">
            <span>Shlok: </span>
            {slok.slok}
          </p>
          <br />
          {slok.tej && (
            <h6 className="text-lg font-normal">
              <span className="font-semibold text-xl">Translation: </span>
              <span className="text-lg">{slok.tej.ht}</span>
            </h6>
          )}
          <br />
          {slok.raman && (
            <div className="h-[390px] overflow-y-auto scrollbar-hide">
              <span className="text-xl font-semibold">Meaning: </span>

              <span className="text-lg">{slok.raman.et} --Sri Ramanuja</span>
            </div>
          )}
        </div>

        {/* div 2 */}
        <div
          className="font-normal text-red-800 mt-14 h-[550px] m-5"
          id="div2"
          data-aos="fade-up"
        >
          <img
            className="float-left h-[600px] "
            src=".\src\assets\1.png"
            alt=""
          />
          <h3 className="leading-7">
            Chapter: {chapter.chapter_number} Verse: {chapter.verses_count}
          </h3>

          <p>
            <span className="font-semibold leading-10 text-xl">Name:</span>{" "}
            <span className="text-lg">{chapter.translation}</span>
          </p>

          {chapter.meaning && (
            <p>
              <span className="font-semibold text-xl">Translation:</span>{" "}
              <span className="text-lg">{chapter.meaning.en}</span>
            </p>
          )}
          <br />
          {chapter.summary && (
            <p className="h-[390px] overflow-y-auto scrollbar-hide">
              <span className="text-xl font-semibold">Meaning: </span>
              <span className="text-lg">
                {chapter.summary.en} <br /> <br /> {chapter.summary.hi}
              </span>{" "}
            </p>
          )}
        </div>

        {loading ? (
          <div className="flex justify-center m-5">
            <Button onClick={handleRefresh} cursor={"cursor-wait"} />
          </div>
        ) : (
          <div className="flex justify-center m-5">
            <Button cursor={"cursor-pointer"} onClick={handleRefresh} />
          </div>
        )}
        <div className="h-5"></div>
      </div>
      <Audio />
    </>
  );
}

export default App;
