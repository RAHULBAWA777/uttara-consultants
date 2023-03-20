import React from 'react'
import './proshowcaseSkeleton.css'


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