import { useEffect, useRef, useState } from "react";
import "./VideoSection.css";

const VIDEO_ID = "hb6hoPJdh6g";

const VideoSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("video-section-visible");
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="video-section" ref={sectionRef}>
      <div className="section-container video-content">
        <div className="video-header">
          <h2 className="video-title"><b>How I Help My Clients</b></h2>
          <p className="video-subtitle">
            Watch how I deliver solutions that save you time and stress
          </p>
        </div>

        <div className="video-wrapper">
          {playing ? (
            <iframe
              width="100%"
              height="600"
              src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1`}
              title="How Yatharth Sharma helps clients — introduction video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="video-iframe"
            ></iframe>
          ) : (
            // Thumbnail first; the ~850 KB YouTube player only loads on click.
            <a
              href={`https://www.youtube.com/watch?v=${VIDEO_ID}`}
              className="video-iframe video-facade"
              aria-label="Play: How Yatharth Sharma helps clients — introduction video"
              data-cursor="disable"
              onClick={(e) => {
                e.preventDefault();
                setPlaying(true);
              }}
            >
              <img
                src={`https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                onError={(e) => {
                  e.currentTarget.src = `https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`;
                }}
                alt="How Yatharth Sharma helps clients — introduction video"
                loading="lazy"
              />
              <span className="video-play" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
