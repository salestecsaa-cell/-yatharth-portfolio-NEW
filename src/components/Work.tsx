import "./styles/Work.css";
import WorkImage from "./WorkImage";

const sections = [
  {
    title: "",
    items: [
      {
        title: "CallHQ",
        category: "Voice AI Calling Platform",
        tools: "Voice AI, Calling Automation, CRM Integrations",
        image: "/images/callhq.webp",
        link: "https://drive.google.com/drive/folders/1IXUwLXBPtW-EFOHlSGsX0gtDbCD9BR4I",
      },
    ],
  },
  {
    title: "",
    items: [
      {
        title: "Whatsapp Automation",
        category: "WABA Application",
        tools: "WhatsApp Business API, Workflow Automation, Notifications",
        image: "/images/whatsapp.webp",
        link: "https://drive.google.com/drive/folders/1IbOc9RgFdmxmFTveTRv8z5sbJk8kaQ1p",
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
