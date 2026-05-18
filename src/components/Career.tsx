import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          MY PROCESS
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>01. Planning</h4>
              </div>
            </div>
            <p>
              Define content goals, audience, and platform. Align visuals and videos with business objectives and growth targets.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>02. Research</h4>
              </div>
            </div>
            <p>
              Analyze trends, competitors, and formats to plan hooks, visual style, and content structure that captures attention.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>03. Execution</h4>
              </div>
            </div>
            <p>
              Create high-quality graphics & videos such as ads, reels, and motion graphics optimized for engagement & retention.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>04. Delivery</h4>
              </div>
            </div>
            <p>
             Refine content for performance, deliver platform-ready assets, and build repeatable systems for consistent growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;