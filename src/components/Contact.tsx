import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Let's Connect</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Call</h4>
            <p>
              <a
                href="tel:+918770794512"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                +91 877 079 4512
              </a>
            </p>
            <h4>Location</h4>
            <p>
              Indore, India.
            </p>
          </div>
          <div className="contact-box">
            <h4>Contact Me</h4>
            <a
              href="https://www.upwork.com/freelancers/yatharth114/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Upwork <MdArrowOutward />
            </a>
             <a
              href="tel:+918770794512"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Call <MdArrowOutward />
            </a>
            <a
              href="https://wa.me/918770794512"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              WhatsApp <MdArrowOutward />
            </a>
            <a
              href="mailto:yatharth114@gmail.com"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              <span>Yatharth Sharma</span>
            </h2>
            <h5>Graphic Designer & Video Editor</h5>
            <h5>
              <MdCopyright /> 2026 — Yatharth Sharma
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
