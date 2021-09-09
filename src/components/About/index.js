import React from 'react';
import Hi from '../../assets/images/HI.png';
import Cat from '../../assets/images/Cat.png';

function About() {
    const [skills] = React.useState([
        { label: 'HTML', color:"purple-300"},
        { label: 'CSS', color: "blue-300"},
        { label: 'jQuery', color:"pink-300"},
        { label: 'React', color: "indigo-300"},
        { label: 'Node.js', color:"yellow-300" },
        { label: "MongoDB", color: "green-300"},
        { label: "Express", color: "gray-300"},
        { label: "SQL", color: "yellow-500"}
      ]);

    return (
    <section className="text-center">
        <div className="grid grid-cols-6 gap-4">
            <div className="col-start-2 col-span-4">
        <img src={Hi} alt="saying Hi" className="animate-bounce w-96 h-100 mx-auto pt-20"/>
        <img src={Cat} alt="Cartoon Cat" className="w-96 h-100 mx-auto pb-3"/>
        <p className="inline mt-96 rounded-full font-light text-red-300 text-4xl tracking-widest">I am Sonali Pandey! A Full-Stack developer.</p>
        </div>

        <div className="col-start-1 col-end-7 pt-6">
        <h3 className="text-5xl text-white text-red-300 h-16">My Skills</h3>
        <ul className="container mx-auto flex flex-wrap justify-evenly">
        {skills.map((skill) => (
            <li
            className={`inline text-3xl my-3 shadow-lg text-white no-underline rounded-full py-3 px-6 bg-${skill.color}`}
            key={skill.label}
            >
                { skill.label }
            </li>
        ))}
        </ul>
        </div>
        </div>
    </section>

    )
}

export default About;