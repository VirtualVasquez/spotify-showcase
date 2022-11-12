import React from 'react';
import {
    Link
} from "react-router-dom";
import { BiHomeAlt } from 'react-icons/bi';
import { BiSearch } from 'react-icons/bi';
import { VscLibrary } from 'react-icons/vsc';
import './NavMenu.scss';

const NavMenu = props => {
    return(
        <nav className="col-sm-2 col-xs-12">
            <Link to="/">
                <span className="a"><BiHomeAlt /><span> Home</span></span>
            </Link>
            <Link to="/search">
                <span className="a"><BiSearch /><span> Search</span></span>
            </Link>
            <Link to="/library">
                <span className="a"><VscLibrary /><span> Library</span></span>
            </Link>
        </nav>
    )
}

export default NavMenu;