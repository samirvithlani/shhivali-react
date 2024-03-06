//useEffect is an hook.... side effect handle

import React, { useState } from 'react'
import { useEffect } from 'react'

export const UseEffectDemo = () => {

    const [count, setcount] = useState(0)


    useEffect(() => {
        console.log('useEffect called')
    }, [count])
    


  return (
    <div>
            <h1>USE EFFECT</h1>
            
            <button onClick={() => setcount(count + 1)}>Click</button>
            <h1>{count}</h1>
    </div>
  )
}
