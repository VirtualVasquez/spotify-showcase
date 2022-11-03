import React from 'react';
import { BiHomeAlt } from 'react-icons/bi';
import { BiSearch } from 'react-icons/bi';
import { VscLibrary } from 'react-icons/vsc';
import './NavMenu.scss';

const NavMenu = props => {
    return(
        <nav className="col-sm-2 col-xs-12">
            <a><BiHomeAlt /><span> Home</span></a>
            <a><BiSearch /><span> Search</span></a>
            <a><VscLibrary /><span> Library</span></a>
        </nav>
    )
}

export default NavMenu;