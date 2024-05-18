import React from "react";

function AboutMe() {
    return (
        <div className="about">
            <header>
            <h1>Hi there,</h1>
            <h2>I am Debashis Mitra, a fullstack developer and web designer </h2></header>
            <p>I was introduced to HTML at 4th standard and then the love for web development kept thriving.
            <p>I am fluent in <span className="Yel">C++, JavaScript, Java </span>.</p> 
            <p>My fields of interest are building experiences with <span className="Yel">Web Technology</span> and also in areas related to <span className="Yel">Cloud Computing</span>.</p>    
            <p>I am in a continuous learning curve of <span className="Yel">Python</span>.</p>   
            <p>I specialize in both frontend and backend development, with expertise in 
                <span className="Yel"> React.js</span>, 
                <span className="Yel"> Next.js</span>, 
                and <span className="Yel"> Spring</span>. 
                This allows me to create robust, scalable web applications that meet diverse project needs. 
                By leveraging Node.js and modern JavaScript libraries alongside Spring, 
                I ensure high-performance solutions across the full stack.</p>    
            </p>
        </div>
    );
}

export default AboutMe;
