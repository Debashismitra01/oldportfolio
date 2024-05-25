import React, { useState, useEffect } from 'react';
import Links from "./links";

const texts = [
  'Full Stack Developer',
  'Web Designer',
  'Cloud Ops',
  'Freelancer',
];

function Intro() {
  const [index, setIndex] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 2000); // Change text every 4 seconds

        return () => clearTimeout(timeout);
    }, [index]);

    return(
        <div className='Intro' >
      <div className='left-container' >
        <div className="text">
        <h1>Hi, I am <span className='name'>Debashis Mitra</span></h1>
        <h2>Crafting a digital experience</h2>
        <div className="typewriter">
            {texts[index]}
        </div>
        <div className="CV">
        <a className="resume" href="https://drive.google.com/uc?export=download&id=1vnWzlxnqqgdSazVLd9Mbh1EvpsQvui" download="Javc">Download</a>
        <Links />
       </div>
      </div>
      
      </div>
      <div className="right-container">
      <div className='pic' >
      </div>
      </div>
    </div>
    );
}

export default Intro;
