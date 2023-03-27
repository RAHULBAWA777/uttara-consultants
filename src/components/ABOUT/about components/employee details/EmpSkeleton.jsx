import React from 'react'
import './empskeleton.css'

const EmpSkeleton = (props) => {
  return (
    <>
      <div id="empSkeletonWrapper">
        <div className="empSkeletonWrapperSemi">
          <img src="https://duruthemes.com/demo/html/bauen/multipage-darksidebar/img/team/1.jpg" alt="empimg" />
          <h1 className="empCaption"><p>{props.name}</p><span>{props.des}</span></h1>
        </div>
      </div>
    </>
  )
}

export default EmpSkeleton;