import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { App } from './App'
import { About } from './about/About'

const Header = (props) => {

    const icon = props.layout === 'list' ? 'fas fa-th' : 'fas fa-th-list'
    const aboutPage = <span className="nothing"></span>;
    const mainPage = <><span className="buttons">
        <h3 ><Link to="/about" className="link-to">About</Link></h3>
        <button className="refresh-button" onClick={props.refreshPage}>
            <i className="fas fa-redo-alt"></i>
        </button>
        <button className="grid-button" onClick={props.onLayoutChangeClick}>
            <i className={icon}></i>
        </button>
    </span></>;
    return (
        <header className="header">
            <h1 ><Link to="/" className="link-to">BIT People</Link></h1>
            {props.about === false ? mainPage : aboutPage}


        </header>
    )
}

export {
    Header
}




