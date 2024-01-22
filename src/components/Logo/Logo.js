import React from 'react';
import { Tilt } from 'react-tilt';
//import './Logo.css'
import brain from './brain.png';

const Logo = () => {
    return(
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2" options={{ max: 40 }} style={{ height: 150, width: 150 }} > {/* Maybe try shadow-2 class */}
                <div className="Tilt-inner pa3 photo"> <img src={brain} alt="brain-logo"/></div>
            </Tilt>
        </div>
    )
}

export default Logo;