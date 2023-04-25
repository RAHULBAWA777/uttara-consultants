import React from 'react'
import './empskeleton.css'

const EmpSkeleton = (props) => {
  return (
    <>
      <div id="empSkeletonWrapper">
        <div className="empSkeletonWrapperSemi">
          <img src={props.img} alt="empimg" />
          <h1 className="empCaption"><p>{props.name}</p><span>{props.des}</span></h1>
        </div>
      </div>
    </>
  )
}

export default EmpSkeleton;