import React from 'react'

function Card({item, index}) {
  return (
    <ul key={index}>
      <li>{item.desc}</li>
      <li>{item.isDone.toString()}</li>
    </ul>
  )
}

export default Card
