import React from 'react';
import { FaLinkedin, FaGithub,} from "react-icons/fa";

function Footer() {
    return (
            <div className="footer">
                <footer>
                        <a href="https://www.linkedin.com/in/luke-torvinen-692811238/" target="blank" rel="noopener noreferrer">
                            <li className="logo">
                                <FaLinkedin />
                            </li>
                        </a>
                        <a href="https://github.com/luketorv" target="blank" rel="noopener noreferrer">
                            <li className="logo">
                                <FaGithub />
                            </li>
                        </a>
                </footer>
            </div>
        );
    }

export default Footer;