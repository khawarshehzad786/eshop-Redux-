import React from 'react'
import { useSelector } from 'react-redux'

const Child = () => {
    const data = useSelector((d)=>{
        return d.show.value
    })
  return (
    <>
    
    <p>the value is:{data} </p>
    </>
  )
}

export default Child