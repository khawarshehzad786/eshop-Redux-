import React from 'react'
import { useSelector } from 'react-redux'

const SubChild1 = () => {
    const data = useSelector((d)=>{
        
console.log(d)
return d.show.value
    })
    return (
        <div>
            <h1>Sub Child {data}</h1>
            <button>Click Me</button>
        </div>
    )
}

export default SubChild1