import "./styles/Reviews.css";

// Quoted from public client feedback on the Upwork profile. Client names are
// shown the way Upwork shows them (first name and initial) or not at all.
const reviews = [
  {
    text: "Great work, he became one of our top 10 editors!",
    client: "Simon B.",
    project: "Performance Video Editor for a fast-growing DTC brand",
    date: "Oct 2026",
  },
  {
    text: "Yatharth is a very creative expert at video design. It is such a pleasure to work with him. Very kind and responsive. We highly recommend Yath. Everything he has delivered has been fantastic.",
    client: "",
    project: "AI Video Creator / Motion Graphics Editor",
    date: "Aug 2026",
  },
  {
    text: "I would give a million stars if I could! Yatharth helped me with a very tight deadline- he followed all my instructions, edits, and was so pleasant to deal with. Will hire again!",
    client: "Mira Z.",
    project: "Instagram Reel editor",
    date: "Nov 2023",
  },
  {
    text: "Incredible work, 5 stars all around, there is no one better.",
    client: "Anthony C.",
    project: "In-house graphic designer for social media",
    date: "Jul 2024",
  },
  {
    text: "It was amazing working with Yatharth. He delivered all of the project on given deadlines…",
    client: "",
    project: "Graphic Designer & Video Editor",
    date: "Dec 2024",
  },
  {
    text: "Yath’s graphics never disappoint—consistently creative, clean, and on-brand. His time management is excellent, and he’s always open, collaborative, and easy to work with. A reliable go-to for quality design work.",
    client: "",
    project: "Vehicle graphics",
    date: "Apr 2025",
  },
];

const Reviews = () => {
  return (
    <div className="reviews-section" id="reviews">
      <div className="reviews-container section-container">
        <h2>
          CLIENT <span>REVIEWS</span>
        </h2>
        <p className="reviews-summary">
          5.0 from 45 reviews on Upwork · 100% Job Success · Top Rated Plus
        </p>

        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <figure key={index} className="review-card">
              <div className="review-stars" aria-label="Rated 5 out of 5">
                ★★★★★
              </div>
              <blockquote>“{review.text}”</blockquote>
              <figcaption>
                {review.client && <strong>{review.client}</strong>}
                <span>
                  {review.project} · {review.date}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <a
          className="reviews-more"
          href="https://www.upwork.com/freelancers/yatharth114/"
          target="_blank"
          rel="noopener"
          data-cursor="disable"
        >
          Read all reviews on Upwork
        </a>
      </div>
    </div>
  );
};

export default Reviews;
