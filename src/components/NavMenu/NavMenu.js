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
                <a><BiHomeAlt /><span> Home</span></a>
            </Link>
            <Link to="/search">
                <a href="#"><BiSearch /><span> Search</span></a>
            </Link>
            <Link to="/library">
                <a href="#"><VscLibrary /><span> Library</span></a>
            </Link>
        </nav>
    )
}

export default NavMenu;