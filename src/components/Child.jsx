import React from 'react'
import { useSelector } from 'react-redux'

const Child = () => {
    const data = useSelector((d)=>{
        return d.show.value
    })
  return (
    <>
    <h1>the value is:{data} </h1>
    </>
  )
}

export default Child