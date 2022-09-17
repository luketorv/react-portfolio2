import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";


function About() {
    return(
        <section className="center">
            <h1 className="center" id="about">About Me</h1>
            <p>
                Hi, I'm Luke. I'm an audio engineer and web developer.
            </p>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
        </section>
    );
}

export default About;