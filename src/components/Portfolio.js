import React from "react";

function Portfolio(){
    var projects =[
        {
            name:"Password generator",
            description:"Password generator app",
            github: "https://github.com/Leon0917/react-portfolio",
            live: ""
        },
        {
            name:"Passwor",
            description:"Password generator app",
            github: "https://github.com/Leon0917/react-portfolio",
            live: ""
        },
        {
            name:"Node Js readmer",
            description:"Password generator app",
            github: "https://github.com/Leon0917/react-portfolio",
            live: ""
        },
        {
            name:"React Emp dirr",
            description:"Password generator app",
            github: "https://github.com/Leon0917/react-portfolio",
            live: ""
        }
    ]
    return(<div className="container">
        {projects.map((project,key) => (
            <div class="card">
                <h1>{project.name}</h1>
                <p>{project.description}</p>
                <h6>Github: <a href={project.github}>{project.github}</a></h6>
                <h6><a href={project.live}>Check the app</a></h6>
            </div>
        ))}
    </div>

    )
}
export default Portfolio;