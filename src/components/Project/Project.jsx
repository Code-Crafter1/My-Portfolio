import { Link, useNavigate } from "react-router-dom";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import MyWork from "../MyWork";

import "./Project.css";

const project = () => {
  const navigate = useNavigate(); // ✅ hook for navigation

  window.scrollTo(0, 0);

  const handleBack = () => {
    navigate("/", { state: { scrollTo: "projects" } });
  };
  return (
    <div className="project-timeline">
      {/* 🔙 Back button */}
      <button onClick={handleBack} className="back-button">
        ← Back to Projects
      </button>

      <h2 className="text-5xl font-bold project-title">
        <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
          Projects
        </span>
      </h2>
      <VerticalTimeline>
        {MyWork.map((element) => (
          <VerticalTimelineElement
            key={element.id}
            icon={<img src={element.icon} alt="icon" />}
            iconClassName="timeline-icon"
            contentStyle={{ background: "#1a1a1a", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #1a1a1a" }}
          >
            <div className="timeline-project">
              <img
                className="timeline-img"
                src={element.image}
                alt={element.name}
              />
              <h3 className="timeline-title">{element.name}</h3>
              <p className="timeline-description">{element.miniDescription}</p>

              <div className="timeline-links">
                <Link
                  to={`/projects/${element.id}`}
                  className="timeline-explore"
                >
                  Explore More &nbsp;
                  <i className="fa-solid fa-arrow-right" />
                </Link>
                <a
                  href={element.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="timeline-github"
                >
                  GitHub
                </a>
              </div>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default project;
