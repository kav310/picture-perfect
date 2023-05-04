import React from 'react'

const Button = (props: any) => {
  return (
    <button className='bg-brown-10 text-white py-2 px-6 rounded-3xl'>
      {props.children}
    </button>
  )
}

export default Button