import React from 'react'

 export default function TodoList(props) {
  const { children } = props
  
  return (
    <div className='p-2 border border-white border-solid flex justify-between'>{children}
    
    </div>
  )
}
