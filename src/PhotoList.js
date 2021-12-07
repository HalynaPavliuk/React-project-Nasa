import React from 'react'
import Photo from './Photo';


function PhotoList (props) {
    const {photos = []} = props;
    
    return <div className="photos">
        {photos.length ? photos.map(photo => (<Photo key={photo.id} {...photo} />)) : <h4> File not found </h4>}     
    </div>

}

export default PhotoList;