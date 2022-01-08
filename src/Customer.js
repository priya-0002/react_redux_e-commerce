import React from 'react'

const Customer = (props) => {
    const{data1}= props
    return (
        <div>
          <h4>{data1.name}</h4>
           <h4>{data1.age}</h4>
        </div>
    )
}

export default Customer
