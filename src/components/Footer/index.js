import React from "react";
import githubLogo from '../../assets/github.png';
import linkedinLogo from '../../assets/inLogo.png';

function Footer() {
    return (
        <footer className="footer">
            <div>
                <a href="http://github.com/TCYang1006" target="_blank" rel="noopener noreferrer">
                    <img src={githubLogo} alt="Github Logo" className="logo"></img>
                </a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/tongchee-yang-1971a0227" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinLogo} alt="Linkedin Logo" className="logo"></img>
                </a>
            </div>
        </footer>
    )

}
export default Footer;