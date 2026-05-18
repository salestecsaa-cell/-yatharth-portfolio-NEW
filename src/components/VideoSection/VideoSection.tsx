import { useEffect, useRef } from "react";
import "./VideoSection.css";

const VideoSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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
          <iframe
            width="100%"
            height="600"
            src="https://www.youtube.com/embed/JuMjDiSpjeA?si=rP0D5L0eAgstawxA"
            title="Saving you time and stress"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="video-iframe"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
