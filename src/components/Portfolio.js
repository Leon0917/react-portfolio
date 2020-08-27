import React from "react";

function Portfolio() {
  var projects = [
    {
      name: "Password generator",
      description: "Password generator app",
      github: "https://github.com/Leon0917/passwordGeneratorJs.Github.io",
      live: "https://leon0917.github.io/passwordGeneratorJs.Github.io/",
    },
    {
      name: "Note Taker",
      description: "Note taker app",
      github: "https://github.com/Leon0917/noteTaker",
      live: "https://leon0917.github.io/noteTaker/",
    },
    {
      name: "Node Js readme generator",
      description: "Readme generator app",
      github: "https://github.com/Leon0917/readmeGenerator",
      live: "",
    },
    {
      name: "React Emp dirr",
      description: "Password generator app",
      github: "https://github.com/Leon0917/react-portfolio",
      live: "https://leon0917.github.io/readmeGenerator/",
    },
  ];
  return (
    <div className="container">
      {projects.map((project, key) => (
        <div className="card">
          <h1>{project.name}</h1>
          <p>{project.description}</p>
          <h6>
            Github: <a href={project.github}>{project.github}</a>
          </h6>
          <h6>
            <a href={project.live}>Check the app</a>
          </h6>
        </div>
      ))}
    </div>
  );
}
export default Portfolio;
