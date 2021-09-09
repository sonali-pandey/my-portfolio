import React, { useState } from 'react';

function Portfolio() {
    const [projects] = useState([
        {
            name: "SmartFix",
            description: "Book your home maintenance service online",
            link: "https://floating-cove-91289.herokuapp.com/",
            image: "SmartFix",
            theme: "blue"
        },
        {
            name: "COVIINFO",
            description: "Latest Covid-19 related information",
            link: "https://group6-uot.github.io/uot-project1-group6/",
            image: "Coviinfo",
            theme: "red"
        },
        {
            name: "Quizzler",
            description: "A 60 seconds Javascript quiz!",
            link: "https://sonali-pandey.github.io/Quizzler/",
            image: "Quizzler",
            theme: "purple"
        },
        {
            name: "Schedule Simple",
            description: "A minimalistic daily work scheduler.",
            link: "https://sonali-pandey.github.io/schedule-simple/",
            image: "schedule-simple",
            theme: "blue"
        },
        {
            name: "Taskmaster Pro",
            description: "A task organizer: drag and drop your progress",
            link: "https://sonali-pandey.github.io/taskmaster-pro/",
            image: "Taskmasterpro",
            theme: "gray"
        },
        {
            name: "Weather To Go",
            description: "Current and 5-Day weather forecast",
            link: "https://sonali-pandey.github.io/weather-to-go/",
            image: "weather-to-go",
            theme: "blue"
        },
    ])
    return(
        <main className="container mx-auto p-16 h-screen">
        <h3 className="text-5xl z-40 text-red-300 h-16 py-5 mx-auto grid grid-cols-1">My Projects</h3>

        <div className="flex flex-wrap pt-5 gap-x-16 gap-y-16 grid grid-cols-1 md:grid-cols-3">
            {projects.map((project) => (

            <a className="flex-1 shadow-lg p-3 transition duration-300 ease-in-out transform hover:scale-110" key={project.name} href={ project.link } target="__blank" rel="noreferrer">
                <h3 className={`text-3xl font-light text-${ project.theme }-600`}>{ project.name }</h3>
                <p className="text-xl font-thin">{ project.description }</p>
                <img src={require(`../../assets/images/${ project.image }.png`).default } alt={`${project.name} webpage snippet`}/>
            </a>

            ))}
        </div>

        </main>
    )
}

export default Portfolio;