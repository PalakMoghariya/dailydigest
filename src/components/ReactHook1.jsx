// import { useState } from "react"
import React, {useState, useEffect} from 'react'

function ReactHook1() {
    const[count,setCount]=useState(0);
    // useEffect(() => {
    //   // Update the document title using the browser API
    //   document.title = `You clicked ${count} times`;
    // });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

export default ReactHook1