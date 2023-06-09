import React from 'react'
import './proshowcaseSkeleton.css'
// import p1 from '../../assets/1.jpg'
// import p2 from '../../assets/2.jpg'
// import p3 from '../../assets/3.jpg'

const proShowcase = (props) => {

    return (
        <>
            <div id="projectCardsWrapper">
                <img src={props.img} alt={props.name} />
                <div className="caption">
                    <h1 className='commonCaption'><p>{props.name}</p>{props.location}</h1>
                </div>
            </div>
        </>
    )
    
}

export default proShowcase