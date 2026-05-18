import { useEffect, useState } from "react";

import "./styles/Loading.css";

import { useLoading } from "../context/LoadingProvider";

import Marquee from "react-fast-marquee";

const Loading = ({ percent }: { percent: number }) => {

  const { setIsLoading } = useLoading();

  const [loaded, setLoaded] = useState(false);

  const [isLoaded, setIsLoaded] = useState(false);

  const [clicked, setClicked] = useState(false);

  if (percent >= 100) {

    setTimeout(() => {

      setLoaded(true);

      setTimeout(() => {

        setIsLoaded(true);

      }, 300); // REDUCED: 1000ms → 300ms

    }, 300); // REDUCED: 600ms → 300ms

  }

  useEffect(() => {

    import("./utils/initialFX").then((module) => {

      if (isLoaded) {

        setClicked(true);

        setTimeout(() => {

          if (module.initialFX) {

            module.initialFX();

          }

          setIsLoading(false);

        }, 400); // REDUCED: 900ms → 400ms

      }

    });

  }, [isLoaded]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {

    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);

    target.style.setProperty("--mouse-y", `${y}px`);

  }

  return (

    <>

      <div className="loading-header">

        <a href="/#" className="loader-title" data-cursor="disable">

          <img src="/images/yatharth-profile.webp" className="loader-profile-img" />

        </a>

        <div className={`loaderGame ${clicked && "loader-out"}`}>

          <div className="loaderGame-container">

            <div className="loaderGame-in">

              {[...Array(27)].map((_, index) => (

                <div className="loaderGame-line" key={index}></div>

              ))}

            </div>

            <div className="loaderGame-ball"></div>

          </div>

        </div>

      </div>

      <div className="loading-screen">

        <div className="loading-marquee">

          <Marquee>

            <span> Graphic Designer</span> <span>Video Editor</span>

            <span> Graphic Designer</span> <span>Video Editor</span>

          </Marquee>

        </div>

        <div

          className={`loading-wrap ${clicked && "loading-clicked"}`}

          onMouseMove={(e) => handleMouseMove(e)}

        >

          <div className="loading-hover"></div>

          <div className={`loading-button ${loaded && "loading-complete"}`}>

            <div className="loading-container">

              <div className="loading-content">

                <div className="loading-content-in">

                  <span className="loading-text">Loading</span>

                  <span className="loading-percent">{percent}%</span>

                </div>

              </div>

              <div className="loading-box"></div>

            </div>

            <div className="loading-content2">

              <span>Yatharth Sharma</span>

            </div>

          </div>

        </div>

      </div>

    </>

  );

};

export default Loading;

export const setProgress = (setLoading: (value: number) => void) => {

  let percent: number = 0;

  let interval = setInterval(() => {

    if (percent <= 50) {

      let rand = Math.round(Math.random() * 8); // INCREASED: 5 → 8 for faster progress

      percent = percent + rand;

      setLoading(percent);

    } else {

      clearInterval(interval);

      interval = setInterval(() => {

        percent = percent + Math.round(Math.random() * 2); // INCREASED: 1 → 2 for faster progress

        setLoading(percent);

        if (percent > 91) {

          clearInterval(interval);

        }

      }, 800); // REDUCED: 2000ms → 800ms

    }

  }, 50); // REDUCED: 100ms → 50ms for faster updates

  function clear() {

    clearInterval(interval);

    setLoading(100);

  }

  function loaded() {

    return new Promise<number>((resolve) => {

      clearInterval(interval);

      interval = setInterval(() => {

        if (percent < 100) {

          percent++;

          setLoading(percent);

        } else {

          resolve(percent);

          clearInterval(interval);

        }

      }, 1); // REDUCED: 2ms → 1ms for instant completion

    });

  }

  return { loaded, percent, clear };

};
