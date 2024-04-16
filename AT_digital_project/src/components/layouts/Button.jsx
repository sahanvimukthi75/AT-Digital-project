import React from 'react'

const Button = (props) => {
  return (
    <div> <button className=' px-20 py-2  bg-brightColor text-white  '>
    {props.title}
  </button></div>
  )
}

export default Button