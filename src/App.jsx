const projects = [
  {
    title: "TaskManager Component",
    description:
      "Built a task manager using OSU components to organize tasks by name, date, status, and category. Created an implementation called TaskManagerOnSequence, which helped me better understand abstraction and how interfaces connect to concrete implementations. While there is room for improvement, this project was a valuable learning experience and increased my interest in software development.",
    technologies: "Java, OSU Components, Git",
    linkLayout: "row", // buttons side by side
    links: [
      {
        label: "View TaskManagerOnSequence.java",
        href: "https://github.com/trdyer06/portfolioProject/blob/main/src/TaskManagerOnSequence.java",
      },
      {
        label: "View TaskManagerSecondary.java",
        href: "https://github.com/trdyer06/portfolioProject/blob/main/src/TaskManagerSecondary.java",
      },
    ],
  },
  {
    title: "Trivia Game",
    description:
      "Developed an interactive trivia application as my first project using JavaScript, learning the core principles of the language in real-time as I built. I implemented a dynamic 30-second timer and a multi-category selection system, which required a deep dive into event-driven programming. Creating the logic for the point tracking, high-scores, and streak counters helped me understand how to manage state and provide instant visual feedback to the user. While I am still refining my coding style, building this from scratch while teaching myself the syntax was a rewarding challenge that solidified my interest in front-end development.",
    technologies: "HTML, CSS, JavaScript, Git, Open Trivia Database API",
    image: { src: "/images/gameScreen.png", alt: "Screenshot of Game Screen" },
    linkLayout: "column", // buttons stacked next to the image
    links: [
      {
        label: "View script.js",
        href: "https://github.com/trdyer06/trivia-game/blob/main/script.js",
      },
      {
        label: "Play Thomas' Trivia Game",
        href: "https://trdyer06.github.io/trivia-game/",
      },
    ],
  },
];

function Hero() {
  return (
    <div className="hero">
      <img
        src="/images/HeadShot.png"
        alt="Headshot of Thomas"
        className="headshot"
      />
      <h3>Thomas Dyer - Computer and Information Science Student</h3>
      <p>
        I am a student at The Ohio State University studying Computer and
        Information Science with a focus in Game Design and Animation as well as
        Web Development. I am pursuing a career in Software Development, so I am
        presenting the work I have completed so far.
      </p>
    </div>
  );
}

function Project({ project }) {
  const { title, description, technologies, image, linkLayout, links } = project;

  const linkButtons = links.map((link) => (
    <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
      <button>
        <p>{link.label}</p>
      </button>
    </a>
  ));

  return (
    <div className="project">
      <li>
        <h5>{title}</h5>
        <div className="project-content">
          <div className="project-description">
            <p>{description}</p>
            <p>Technologies Used: {technologies}</p>
          </div>
          <div className="project-details">
            {image && <img src={image.src} alt={image.alt} />}
            <div className={linkLayout === "row" ? "row-links" : "column-links"}>
              {linkButtons}
            </div>
          </div>
        </div>
      </li>
    </div>
  );
}

function Contact() {
  return (
    <div className="contact">
      <p>Contact Information</p>
      <p>
        Email: <a href="mailto:trdyer06@gmail.com">trdyer06@gmail.com</a>
      </p>
      <p>Phone: (412) 545-4554</p>
      <p>
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/thomasdyer1006"
          target="_blank"
          rel="noreferrer"
        >
          www.linkedin.com/in/thomasdyer1006
        </a>
      </p>
    </div>
  );
}

export default function App() {
  return (
    <>
      <div className="main-content">
        <Hero />
        <h2>Projects</h2>
        <ul>
          {projects.map((project) => (
            <Project key={project.title} project={project} />
          ))}
        </ul>
      </div>
      <Contact />
    </>
  );
}