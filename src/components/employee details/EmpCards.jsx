import React from 'react'
import EmpSkeleton from './EmpSkeleton'
import EmpData from './EmpData'
import './empskeleton.css'


const createEmpCards = (data) => {
  return <EmpSkeleton name={data.name} des={data.des} img={data.img} key={data.id} />
}
const EmpCards = () => {
  return (
    <>
      <div className="EmpCardsWrapper pad">
        <h1 className='commonHeading'><span>our</span> Team</h1>
        <div className="empCardWrapperSemi">
          {EmpData.map(createEmpCards)}
        </div>
      </div>
    </>
  )
}

export default EmpCards