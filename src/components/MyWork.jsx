import feedxImg from "../assets/images/feedx.png";
import portfolioImg from "../assets/images/portfolio.png";
import simonImg from "../assets/images/simongame.png";
import skill_basedImg from "../assets/images/skill_based.png";
import spotifyImg from "../assets/images/spotify.png";
import weatherImg from "../assets/images/weatherapp.png";

import feedxIcon from "../assets/icons/feedxicon.svg";
import simonIcon from "../assets/icons/gameicon.svg";
import mithilaIcon from "../assets/icons/mithilaicon.svg";
import musicIcon from "../assets/icons/musicicon.svg";
import portfolioIcon from "../assets/icons/portfolioicon.svg";
import weatherIcon from "../assets/icons/weathericon.svg";

const MyWork = [
  {
    id: "portfolio",
    name: "My Portfolio",
    image: portfolioImg,
    icon: portfolioIcon,
    miniDescription: "A personal portfolio to display projects and skills.",
    fullDescription:
      "I built my personal portfolio website to showcase my projects, skills, and experience as a frontend developer. It’s fully responsive and designed with a modern UI using React.js and Tailwind CSS. Smooth scrolling, animated transitions, and interactive sections enhance the user experience. This site serves as a central hub for recruiters and collaborators to connect with me.",
    technologies: ["React", "Tailwind CSS", "CSS", "React Router"],
    github: "https://github.com/Code-Crafter1/My-Portfolio.git",
    live: "https://my-portfolio92.netlify.app",
  },
  {
    id: "weather-app",
    name: "Weather App",
    image: weatherImg,
    icon: weatherIcon,
    miniDescription: "Weather app with real-time city-based updates.",
    fullDescription:
      "I built a Weather App using React, CSS, and OpenWeather API to display real-time weather conditions of any searched location. The app fetches live data through API calls and presents temperature, weather status, and other key metrics. It features a clean, responsive UI built with CSS. This project demonstrates my skills in working with APIs and dynamic React components.",
    technologies: ["React", "API", "CSS"],
    github: "https://github.com/Code-Crafter1/Weather-App.git",
    live: "https://weather2926.netlify.app",
  },
  {
    id: "Feed-x",
    name: "Feed X",
    image: feedxImg,
    icon: feedxIcon,
    miniDescription: "Interactive social feed app with modern UI.",
    fullDescription:
      "FeedX is a dynamic web platform whose frontend I designed using React, Tailwind CSS, and some custom CSS. It was developed during Hackfest, a hackathon hosted at IIT Dhanbad, where our team emerged as winners in our problem statement. The site delivers a clean UI and smooth user experience tailored to our challenge. It reflects my ability to build scalable, responsive interfaces under real hackathon conditions.",
    technologies: ["React", "API", "CSS", "Tailwind CSS", "Javascript"],
    github: "https://github.com/HarryOhm33/FeedX.git",
    live: "https://feedxmarkii.netlify.app",
  },
  {
    id: "Simon-says",
    name: "Simonsays Game",
    image: simonImg,
    icon: simonIcon,
    miniDescription: "Classic memory game using color sequences.",
    fullDescription:
      "I created a Simon Says Game using HTML, CSS, and JavaScript, inspired by the classic memory challenge. The game lights up buttons in a sequence that players must repeat, getting progressively harder. JavaScript powers the dynamic interactions, sequence logic, and game state. It’s a fun way to showcase my ability to handle interactivity and logic with pure JavaScript.",
    technologies: ["HTML", "CSS", "Javascript"],
    github: "https://github.com/Code-Crafter1/Simon-Says.git",
    live: "https://simonsay2.netlify.app",
  },
  {
    id: "Hire-Easy",
    name: "Hire Easy",
    image: skill_basedImg,
    icon: mithilaIcon,
    miniDescription:
      "HireEasy enables skill-based hiring for smarter recruitment.",
    fullDescription:
      "Hire Easy is a skill based recruitment platform built with React and Tailwind CSS. It enables recruiters to hire based on real skills instid of traditional resumes.The app features a responsive UI for different filtering,evaluation, & hiring. It was developed during hackathon, showcasing quick problem-solving & real world impact .",
    technologies: ["React", "CSS", "Javascript", "TailwindCSS"],
    github: "https://github.com/HarryOhm33/We-Hack.git",
    live: "https://easy-hire-seekers.netlify.app/",
  },
  {
    id: "Spotify-clone",
    name: "Spotify Clone",
    image: spotifyImg,
    icon: musicIcon,
    miniDescription: "Spotify-inspired music player interface.",
    fullDescription:
      "I built a Spotify Clone using HTML and CSS, replicating Spotify’s web interface with a sidebar, top navbar, playlist section, and a styled music player footer. The layout is fully responsive, using Flexbox and Grid. Though static, it showcases my front-end design skills and ability to recreate real-world UIs.",
    technologies: ["React", "API", "CSS"],
    github: "https://github.com/Code-Crafter1/Spotify_Clone.git",
    live: "https://spotify-clone2926.netlify.app",
  },
];

export default MyWork;
