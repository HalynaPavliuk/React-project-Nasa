import React from 'react';

function Photo (props) {
    const {
        id,
        sol,
        camera,
        img_src,
        rover
    } = props;

    return <div className="card" id={id}>
                <div className="card-image"> 
                <img src={img_src} />
                </div>
                <div className="card-content">
                <p>{camera.full_name}</p>
                <p>{rover.name}</p>
                <p>{sol}</p>
                </div> 
            </div>
         
           

}

export default Photo ;