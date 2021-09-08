import React from 'react';
import GitHub from '../../assets/images/Octocat.png';
import Email from '../../assets/images/email.png';
import linkedIn from '../../assets/icons/linkedin.svg';

function Footer() {
    return (
        <footer className="h-16 flex flex-wrap justify-center py-5">
        <ul className="flex flex-wrap items-center mx-20 ">
            <li className="mx-3 text-xl">
                <a href="https://www.linkedin.com/in/sonali-pandey/" target="_blank" rel="noreferrer">
                    <img src={linkedIn} className="w-auto h-16" alt="linkedin icon"/>
                </a>
            </li>
            <li className="mx-3 text-xl">
                <a href="mailto:sonali23.1293@gmail.com">
                    <img src={Email} className="w-auto h-16" alt="email icon"/>
                </a>
            </li>
            <li className="mx-3 text-xl">
                <a href="https://github.com/sonali-pandey" target="_blank" rel="noreferrer">
                    <img src={GitHub} className="w-auto h-16"alt="gitHub octocat icon"/>
                </a>
            </li>
        </ul>
    </footer>
    )
}

export default Footer;