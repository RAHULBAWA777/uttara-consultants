import React from 'react'
import "./listViewSkeleton.css"

const ListViewSkeleton = (props) => {
  return (
    <>
      <div className="listViewSkeletonWrapper">
        <i className={props.icon}></i>
        <br></br>
        <p>{props.list}</p>
      </div>
    </>
  )
}

export default ListViewSkeleton