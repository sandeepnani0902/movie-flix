import React from 'react'
import { useState } from 'react';
function WebSeries() {
  const [list, setList] = useState(["A", "B"]);
 const fruits = ["apple", "banana", "carrot"]
const addItem = (item) => {
  setList([...list, ...item]);
};
console.log(list)
  return (<>
  <div>WebSeries</div>
    
    <button onClick={() => addItem(fruits)} >click</button>
  </>
    
  )
}

export default WebSeries