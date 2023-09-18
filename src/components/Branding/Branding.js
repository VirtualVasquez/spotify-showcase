import React from 'react';
import Logo from '../Logo/Logo';
import './Branding.scss';

const Branding = props => {
    return(
        <section id="branding" className='col-12'>
            <h1>
                <Logo />
                Spotify
            </h1>
        </section>
    )
}

export default Branding;