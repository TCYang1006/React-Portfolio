import React from "react";
import githubLogo from '../../assets/github.png';
import linkedinLogo from '../../assets/LinkedIn.png';
import redditLogo from '../../assets/Reddit.png';

function Footer() {
    return (
        <footer className="footer">
            <div>
                <a href="http://github.com/TCYang1006" target="_blank" rel="noopener noreferrer">
                    <img src={githubLogo} alt="Github Logo" className="logo"></img>
                </a>
            </div>
            <div>
                <a href="http://www.linkin.com/in/tongcheeyang" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinLogo} alt="Linkedin Logo" className="logo"></img>
                </a>
            </div>
            <div>
                <a href="http://www.reddit.com" target="_blank" rel="noopener noreferrer">
                    <img src={redditLogo} alt="Reddit Logo" className="logo"></img>
                </a>
            </div>
        </footer>
    )

}
export default Footer;