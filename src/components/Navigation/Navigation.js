import React from 'react';

 const Navigation = ({routeChange, isSignedIn, resetState}) =>{
 	const clearState = () => {
 		routeChange('signin')
 		resetState()
 	}
 	if(isSignedIn === true){
 		return(
			<nav style= {{display: 'flex', justifyContent: 'flex-end'}}>
				<p 
				onClick={clearState} 
				style={{paddingTop: '15px'}} 
				className='f5 f3-l link dim black pointer pa3 underline'>Sign Out</p>
			</nav>
		)
 	}
 	else{
 		return(
 			<nav style= {{display: 'flex', justifyContent: 'flex-end'}}>
	 			<p onClick={() => routeChange('signin')} 
	 			style={{paddingTop: '15px'}} 
	 			className='f5 f3-l link dim black pointer pa3 underline'>Sign in</p>
	 			<p 
	 			onClick={() => routeChange('register')} 
	 			style={{paddingTop: '15px'}} 
	 			className='f5 f3-l link dim black pointer pa2 underline'>Register</p>
	 		</nav>
		)
 	}
 }

 export default Navigation;