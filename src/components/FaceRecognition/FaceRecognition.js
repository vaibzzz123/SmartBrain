import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({imageUrl, topRow, bottomRow, leftCol, rightCol}) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputImage' alt='' src={imageUrl} width='500px' height='auto'/>
                <div className='bounding-box' style={{top: topRow, bottom: bottomRow, left: leftCol, right: rightCol}}></div>
            </div>
        </div>
    )
}

export default FaceRecognition;