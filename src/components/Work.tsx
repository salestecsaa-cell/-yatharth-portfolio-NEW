import "./styles/Work.css";
import WorkImage from "./WorkImage";

const sections = [
  {
    title: "",
    items: [
      {
        title: "Video Editing",
        category: "Video Editing Portfolio",
        tools: "Video Editing, Motion Graphics, Color Grading",
        image: "/images/callhq.webp",
        link: "https://videoediting.yatharth114.com",
      },
    ],
  },
  {
    title: "",
    items: [
      {
        title: "Graphic Design",
        category: "Graphic Design Portfolio",
        tools: "Brand Identity, Social Media, Print Design",
        image: "/images/whatsapp.webp",
        link: "https://graphicdesign.yatharth114.com",
      },
    ],
  },
];

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          MY <span>WORK</span>
        </h2>

        <div className="work-grid">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="work-column">
              <h3 className="section-title">{section.title}</h3>

              <div className="items-container">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="work-item">
                    <div className="item-image">
                      <WorkImage
                        image={item.image}
                        alt={item.title}
                        link={item.link}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
