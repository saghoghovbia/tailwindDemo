import React from 'react'

const Button2 = ({label}) => {
  return (
   <button className='flex
    justify-center items-center gap-2
    px-7 py-4 border font-montserrat
    text-lg leading-none rounded-full text-slate-gray
    border-slate-gray'>
        {label}
    </button>
  )
}

export default Button2