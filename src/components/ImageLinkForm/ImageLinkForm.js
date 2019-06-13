import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onDetect}) =>{
	return(
		<div className='center formContainer'>
			<p className='f4 f2-l f3-m black'>{'Insert your image link below'}</p>
			<div>
				<div className='center form pa4 shadow-5 br3'>
					<input onChange = {onInputChange} className='w-80-l w-80-m w-60 pa2' type='text' />
					<button onClick = {onDetect} className='pointer grow f5 pa2 w-20-l w-40 bg-lightest-blue'>Detect</button>
				</div>
			</div>
		</div>
	)
}

export default ImageLinkForm;