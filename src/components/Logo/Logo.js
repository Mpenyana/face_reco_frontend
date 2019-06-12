import React from 'react';
import Tilt from 'react-tilt'
import face from './face.png';
import './Logo.css';

 const Logo = () =>{
 	return (
 		<div className='mt0 ma4'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 120, width: 120 }} >
			 	<div className="Tilt-inner pa2"><img style={{paddingTop: '3px'}} src={face} alt='face' /></div>
			</Tilt>
 		</div>
	)
 }

 export default Logo;