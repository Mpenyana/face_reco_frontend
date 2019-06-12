import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ image, box }) => {
  return (
    <div className='ma' style={{display: 'flex', justifyContent: 'center'}}>
      <div className='replacement mt2'>
        <img id='inputimage' alt='' src={image} width='500px' height='auto'/>
        <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
      </div>
    </div>
  );
}

export default FaceRecognition;