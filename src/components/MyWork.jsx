import feedxImg from "../assets/images/feedx.png";
import mithilaImg from "../assets/images/mithila.png";
import portfolioImg from "../assets/images/portfolio.png";
import simonImg from "../assets/images/simongame.png";
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
      "This is a fully responsive personal portfolio built using React, showcasing all my skills and projects. It includes a contact form, smooth scroll, and project timeline with detailed previews.",
    technologies: ["React", "Tailwind CSS", "React Router"],
    github: "https://github.com/yourusername/portfolio",
    live: "https://yourportfolio.com",
  },
  {
    id: "weather-app",
    name: "Weather App",
    image: weatherImg,
    icon: weatherIcon,
    miniDescription: "Weather app with real-time city-based updates.",
    fullDescription:
      "This app uses the OpenWeatherMap API to fetch real-time weather data based on the user’s input. It includes animated icons, temperature, humidity, and condition display.",
    technologies: ["React", "API", "CSS"],
    github: "https://github.com/yourusername/weather-app",
    live: "https://weather2926.netlify.app/",
  },
  {
    id: "Feed-x",
    name: "Feed X",
    image: feedxImg,
    icon: feedxIcon,
    miniDescription: "Interactive social feed app with modern UI.",
    fullDescription:
      "This app uses the OpenWeatherMap API to fetch real-time weather data based on the user’s input. It includes animated icons, temperature, humidity, and condition display.",
    technologies: ["React", "API", "CSS"],
    github: "https://github.com/yourusername/weather-app",
    live: "https://weather2926.netlify.app/",
  },
  {
    id: "Simon-says",
    name: "Simonsays Game`",
    image: simonImg,
    icon: simonIcon,
    miniDescription: "Classic memory game using color sequences.",
    fullDescription:
      "This app uses the OpenWeatherMap API to fetch real-time weather data based on the user’s input. It includes animated icons, temperature, humidity, and condition display.",
    technologies: ["React", "API", "CSS"],
    github: "https://github.com/yourusername/weather-app",
    live: "https://weather2926.netlify.app/",
  },
  {
    id: "Mithila-mart",
    name: "Mithila Mart",
    image: mithilaImg,
    icon: mithilaIcon,
    miniDescription: "E-commerce platform for Mithila artworks.",
    fullDescription:
      "This app uses the OpenWeatherMap API to fetch real-time weather data based on the user’s input. It includes animated icons, temperature, humidity, and condition display.",
    technologies: ["React", "API", "CSS"],
    github: "https://github.com/yourusername/weather-app",
    live: "https://weather2926.netlify.app/",
  },
  {
    id: "Spotify-clone",
    name: "Spotify Clone",
    image: spotifyImg,
    icon: musicIcon,
    miniDescription: "Spotify-inspired music player interface.",
    fullDescription:
      "This app uses the OpenWeatherMap API to fetch real-time weather data based on the user’s input. It includes animated icons, temperature, humidity, and condition display.",
    technologies: ["React", "API", "CSS"],
    github: "https://github.com/yourusername/weather-app",
    live: "https://weather2926.netlify.app/",
  },
  // Add more projects here as needed
];

export default MyWork;
