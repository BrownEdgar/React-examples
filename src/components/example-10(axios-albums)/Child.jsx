import React from 'react'

export default function Child(props) {
  console.log(props.children);
  console.log(typeof props.children);
  return (
    <div>
      {props.children}
    </div>
  )
}
