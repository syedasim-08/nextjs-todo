import React, { useState } from 'react'
import Modal from './Modal'
import { useAuth } from '@/context/AuthContext'

const Header = () => {
 
  const [openModal, setOpenModal] = useState(false)

  const { currentUser } = useAuth() 


  return (
    <>
    {openModal && <Modal setOpenModal={setOpenModal} />}
    <div className='sticky top-0 w-full left-0 bg-inherit flex items-center justify-between p-4 border-b border-solid border-white'>
        <h1 className='text-3xl select-none sm:text-6xl'>TODO LIST</h1>
         
 
<i onClick={()=>{
  if(currentUser)

  
  setOpenModal(true)

}
  
  } className="fa-solid fa-user text-xl sm:text-3xl duration-300 hover:opacity-40 cursor-pointer"></i>

        </div>

        </>
  )
}

export default Header