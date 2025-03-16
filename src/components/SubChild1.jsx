import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementbyvalu } from '../features/counterSlice'

const SubChild1 = () => {
    const dispatch = useDispatch()
    const data = useSelector((d)=>{
        
console.log(d.show)
return d.show.value
    })
    return (
        <div>
            <h1>Sub Child {data}</h1>
            <button onClick={()=> dispatch(increment())}>Click Me for increment</button>
            <br />
            <br />

            <button onClick={()=> dispatch(incrementbyvalu(10))}>Click Me for increment + 10</button>

            <br />
            <br />
            <button onClick={()=> dispatch(decrement())}>Click Me for decrement</button>

        </div>
    )
}

export default SubChild1