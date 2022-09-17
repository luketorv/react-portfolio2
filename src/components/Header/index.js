
import React from 'react';
import Nav from "../Nav";

function Header(props) {
    const { currentTab, setCurrentTab } = props;

    return (
        <header>
            <div className="name">
                <h2>Luke Torvinen</h2>
            </div>
            <div>
                <Nav
                    currentTab={currentTab}
                    setCurrentTab={setCurrentTab}
                ></Nav>
            </div>
        </header>
    );
}

export default Header;