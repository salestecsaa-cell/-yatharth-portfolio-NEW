import { useEffect, useState } from "react";

import "./styles/Loading.css";

import { useLoading } from "../context/LoadingProvider";

import Marquee from "react-fast-marquee";

const Loading = ({ percent }: { percent: number }) => {

  const { setIsLoading } = useLoading();

  const [loaded, setLoaded] = useState(false);

  const [isLoaded, setIsLoaded] = useState(false);

  const [clicked, setClicked] = useState(false);

  const [flipKey, setFlipKey] = useState(0);

  useEffect(() => {
    setFlipKey((k) => k + 1);
  }, [percent]);

  if (percent >= 100) {

    setTimeout(() => {

      setLoaded(true);

      setTimeout(() => {

        setIsLoaded(true);

      }, 300);

    }, 300);

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

        }, 400);

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

      {/* ── BIG % COUNTER bottom-left ── */}
      <div className={`loading-counter ${clicked && "loading-counter--out"}`}>
        <span key={flipKey} className="loading-counter__number">
          {percent}
        </span>
        <span className="loading-counter__symbol">%</span>
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

            {/* ── thin progress bar at button bottom ── */}
            <div
              className="loading-progress-bar"
              style={{ width: `${percent}%` }}
            />

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

      let rand = Math.round(Math.random() * 8);

      percent = percent + rand;

      setLoading(percent);

    } else {

      clearInterval(interval);

      interval = setInterval(() => {

        percent = percent + Math.round(Math.random() * 2);

        setLoading(percent);

        if (percent > 91) {

          clearInterval(interval);

        }

      }, 800);

    }

  }, 50);

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

      }, 1);

    });

  }

  return { loaded, percent, clear };

};
