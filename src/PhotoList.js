import React from 'react'
import Photo from './Photo';
import { useState, useEffect } from 'react';


function PhotoList (props) {
    const {photos = []} = props;
    const pageSize = 4;
    const [number, setNumber] = useState(0);
    const [visibleItems, setVisibleItems] = useState([]);

    useEffect(() => {
        const numberOfItems = pageSize * ( number +1 ); 
    
        const visivbleArray = []; 
    
        for(let i= 0 ;i< photos.length ; i++ ){
          if(i < numberOfItems) 
          visivbleArray.push(photos[i])
        }
    
        setVisibleItems(visivbleArray);
        
    } , [number])

    
    return <div className="content">
                <div className="photos">
                    {visibleItems.length ? visibleItems.map(photo => (<Photo key={photo.id} {...photo} />)) : <h4> File not found </h4>} 
                </div>
            <button className="btn-next" onClick={() => setNumber(number + 1)}>Next photos..</button>    
    </div>

}

export default PhotoList;