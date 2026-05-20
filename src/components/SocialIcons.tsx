import { FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa6";
import { SiUpwork } from "react-icons/si";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;
    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;
      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;
      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;
        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);
        requestAnimationFrame(updatePosition);
      };
      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };
      document.addEventListener("mousemove", onMouseMove);
      updatePosition();
      return () => {
        elem.removeEventListener("mousemove", onMouseMove);
      };
    });
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          
            href="https://www.upwork.com/freelancers/~011f837a11249f47be"
            target="_blank"
            rel="noreferrer"
            title="Upwork"
          >
            <SiUpwork />
          </a>
        </span>
        <span>
          <a href="tel:+918770794512" rel="noreferrer" title="Call">
            <FaPhone />
          </a>
        </span>
        <span>
          
            href="https://wa.me/918770794512"
            target="_blank"
            rel="noreferrer"
            title="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </span>
        <span>
          <a href="mailto:yatharth114@gmail.com" rel="noreferrer" title="Email">
            <FaEnvelope />
          </a>
        </span>
      </div>
      
        className="resume-button"
        href="https://www.yatharth114.com/#work"
        rel="noreferrer"
      >
        <HoverLinks text="PORTFOLIO" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
