import React from 'react'
import ListViewSkeleton from '../List View Skeleton/ListViewSkeleton';
import ListViewData from '../List View Skeleton/ListViewData'

const createListView = (data) => {
  return  <ListViewSkeleton list={data.list} icon={data.icon} key={data.id}  />
}
const ListView = () => {

    return (
        <>
            <div className="listViewWrapper pad">
                <h1 className="commonHeading"><span>Our </span>Services</h1>
              <div style={{display:'flex', flexWrap:'wrap',alignItems:'center', justifyContent:'center'}}>{ListViewData.map(createListView)}</div>  
            </div>
        </>
    )
}

export default ListView