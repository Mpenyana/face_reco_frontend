import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';

const NavParent = ({isSignedIn, routeChange, resetState}) => {
	return(
		<div className='mt4' style = {{display: 'flex', justifyContent: 'space-between'}}>
			<Logo/>
			<Navigation resetState = {resetState} routeChange = {routeChange} isSignedIn = {isSignedIn}/>
		</div>
	)
}

export default NavParent;