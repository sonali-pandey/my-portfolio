import { requirePropFactory } from '@mui/material';
import React from 'react';
import GitHub from '../../Octocat.png';
import Email from '../../email.png';
import linkedIn from '../../linkedin.svg';

function Footer() {
    return (
        <footer className="sticky absolute inset-x-0 bottom-0 h-auto z-40 text-white flex flex-wrap justify-center py-5" id="contact">
        <h3 className="text-4xl w-full pt-3 pb-10 text-center font-light mx-20 animate-pulse">Say Hello!</h3>
        <ul className="flex flex-wrap items-center mx-20 ">
            <li className="mx-3 text-xl">
                <a href="https://www.linkedin.com/in/sonali-pandey/" target="_blank" >
                    <img src={linkedIn} className="w-18 h-20" />
                </a>
            </li>
            <li className="mx-3 text-xl">
                <a href="mailto:sonali23.1293@gmail.com">
                    <img src={Email} className="w-18 h-20" />
                </a>
            </li>
            <li className="mx-3 text-xl">
                <a href="https://github.com/sonali-pandey" target="_blank">
                    <img src={GitHub} className="w-18 h-20"/>
                </a>
            </li>
        </ul>
    </footer>
    )
}

export default Footer;