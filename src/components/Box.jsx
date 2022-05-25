import React from 'react'
import "./Box.css"

const Box = (props) => {
  return (
    <div className={props.className ? `${props.className} box` : "box"} onClick={props.onClick} >{props.data}</div>
  )
}

export default Box