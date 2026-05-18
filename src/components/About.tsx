import "./styles/About.css";
import { useState } from "react";

const About = () => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const badges = [
    {
      id: "top-rated",
      title: "TOP RATED PLUS",
      icon: "⭐",
      tooltip: "Top Rated Plus is a talent badge on Upwork that represents the top 3% of performers worldwide and has demonstrated consistent high-quality work with multiple clients."
    },
    {
      id: "job-success",
      title: "100% JOB SUCCESS",
      icon: "👑",
      tooltip: "Job Success Score is a metric used to measure the overall satisfaction of your clients on Upwork. 100% being the highest."
    },
    {
      id: "adobe",
      title: "ADOBE CERTIFIED EXPERT",
      icon: "🏆",
      tooltip: "Adobe Certified Expert status demonstrates professional expertise in Adobe Creative Cloud suite including Photoshop, Illustrator, Premiere Pro, and After Effects."
    }
  ];

  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Ranked among the top 3% of freelancers globally and a Top Rated Plus freelancer on Upwork, I specialize in creating scroll-stopping images and videos that not only look visually stunning but are designed to make an impact.
        </p>
        <p className="para">
          With over 9 years of experience as an Adobe Certified Expert, I've helped more than 200 brands across 30 industries with high-converting designs.
        </p>

        <div className="badges-section">
          {badges.map((badge) => (
            <div key={badge.id} className="badge-container">
              <span className="badge-icon">{badge.icon}</span>
              <span className="badge-text">{badge.title}</span>
              <div className="info-button-wrapper">
                <button
                  className="info-button"
                  onClick={() => setActiveTooltip(activeTooltip === badge.id ? null : badge.id)}
                  onMouseEnter={() => setActiveTooltip(badge.id)}
                  onMouseLeave={() => setActiveTooltip(null)}
                  aria-label={`Information about ${badge.title}`}
                >
                  ℹ
                </button>
                {activeTooltip === badge.id && (
                  <div className="tooltip">
                    {badge.tooltip}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
