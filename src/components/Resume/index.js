import React from 'react';
import myResume from '../../assets/files/resume33.pdf';
import { MdGetApp } from "react-icons/md";

function Resume() {
    return (
        <section>
            <div>
                <a href={myResume} download>Resume <MdGetApp /></a>
                <h1>Skills: HTML, CSS, JavaScript, React, Express, Node, MySQL, MongoDB, MVC, PWA, Git</h1>
            </div>
        </section>
    );
    }

export default Resume;