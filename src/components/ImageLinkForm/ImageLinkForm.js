import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onDetect}) =>{
	return(
		<div>
			<p className='f2 black'>{'Insert your image link below'}</p>
			<div>
				<div className='center form pa4 shadow-5 br3'>
					<input onChange = {onInputChange} className='w-70 pa2' type='text' />
					<button onClick = {onDetect} className='pointer grow pa2 w-30 bg-lightest-blue'>Detect</button>
				</div>
			</div>
		</div>
	)
}

export default ImageLinkForm;