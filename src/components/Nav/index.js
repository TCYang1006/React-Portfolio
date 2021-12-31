import React from "react";

function Nav(props) {
    const { currentTitle, setCurrentTitle } = props;

    return(
        <nav>
            <ul className="flex-row mobile-view">
                <li className={currentTitle === "about" ? "mx-2 navActive": "mx-2"}>
                    <span onClick={() => setCurrentTitle("about")}>About Me</span>
                </li>
                <li className={currentTitle === "portfolio" ? "mx-2 navActive": "mx-2"}>
                    <span onClick={() => setCurrentTitle("portfolio")}>Portfolio</span>
                </li>
                <li className={currentTitle === "contact" ? "mx-2 navActive": "mx-2"}>
                    <span onClick={() => setCurrentTitle("contact")}>Contact</span>
                </li>
                <li className={currentTitle === "resume" ? "mx-2 navActive": "mx-2"}>
                    <span onClick={() => setCurrentTitle("resume")}>Resume</span>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;