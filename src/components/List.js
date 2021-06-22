import React from 'react'
import Card from './Card';

// initial array 
const todoList = [
  {
    desc: "cuci piring",
    isDone: false,
  },
  {
    desc: "cuci baju",
    isDone: false,
  },
  {
    desc: "cuci cucian",
    isDone: true,
  },
  {
    desc: "mancing",
    isDone: true,
  },
  {
    desc: "cuci piring",
    isDone: false,
  },
]

/**
 * List component to render data with array type
 * Iteration using map method
 * Every item woul be passed to Card component (child component)
 */ 
function List() {
  const todoIsDone = todoList.filter(todo => todo.isDone === true);
  return (
    <div>
      {todoIsDone.map((item, index) => (
        <Card item={item} index={index} key={index}/>
      ))}
    </div>
  )
}

export default List;
