import React from 'react';

function Nav( props ) {
  const {
      titles = [],
      setCurrentTitle,
      currentTitle,
  } = props;

  return (
    <nav className="sticky top-0 z-10 h-16 bg-white shadow-sm flex flex-wrap justify-between items-center">
        <h2 className="ml-20 no-underline text-3xl text-red-300">Sonali Pandey</h2>
        <ul className="mx-20 flex flex-wrap items-center">
        {titles.map((title) => (
            <li className={`cursor-pointer transform font-thin hover:scale-110 hover:text-red-600 ${currentTitle.name === title.name && 'font-normal text-red-300'}`} key={title.name}>
                <span 
                className="text-xl ml-3 mr-3 no-underline" 
                onClick={() => { setCurrentTitle(title) }}>{ title.name }
                </span>
            </li>
        ))}
        </ul>
    </nav>
  );
}

export default Nav;