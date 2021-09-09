import React, {useState} from 'react';

function Footer() {

    const [contacts] = useState([
        { name: "Email", 
          link: "mailto:sonali23.1293@gmail.com",
          icon: "images/email.png"
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/sonali-pandey/",
          icon: "images/Octocat.png"
        },
        {
          name: "GitHub",
          link: "https://github.com/sonali-pandey",
          icon: "icons/linkedin.svg"
        }
      ])

    return (
        <footer className="inset-x-0 flex flex-wrap justify-center py-5">
        <ul className="flex flex-wrap items-center mx-20 ">
            {contacts.map((contact) => (
                <li className="mx-3 text-xl mx-auto" key={contact.name}>
                <a href={contact.link} target="_blank" rel="noreferrer">
                    <img src={require(`../../assets/${contact.icon}`).default} className="w-auto h-16" alt={`${contact.name} icon`}/>
                </a>
            </li>
            ))}
        </ul>
    </footer>
    )
}

export default Footer;