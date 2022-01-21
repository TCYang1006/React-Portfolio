import React from "react";
import Nav from "../Nav";

function Header(props) {
    const { currentTitle, setCurrentTitle } = props;

    return (
        <header>
            <div>
                <h2>Tongchee Y. Yang</h2>
                <Nav currentTitle={currentTitle} setCurrentTitle={setCurrentTitle}></Nav>
            </div>
        </header>
    );
}

export default Header;