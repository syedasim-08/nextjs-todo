import React, { useState } from 'react'
import Modal from './Modal'
import { useAuth } from '@/context/AuthContext'
import TodoCard from './TodoCard'


const Header = () => {
 
  const [openModal, setOpenModal] = useState(false)

  const { currentUser } = useAuth() 

   
  const [walletAddress, setWalletAddress] = useState("")
  const [walletAmount, setWalletAmount] = useState("")

 

 const handleClick = async()=>{
 
  console.log("processing")
   
  if(typeof window.ethereum !== "undefined") {
    console.log("detected")

     try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts"
        })
        console.log(accounts)
        setWalletAddress(accounts[0])

        
       await checkBalance(accounts[0])
       



     }catch(err) {
        console.log("error connecting to wallet")
     }


  }else {
    console.log("metamask not detected")
  }



 }

 async function checkBalance (address){

  const balance = await window.ethereum.request({
    method : "eth_getBalance",
    params: [address,'latest']
  })
  console.log(balance)
 
  setWalletAmount(balance)

   

 }



  return (
    <>
    {openModal && <Modal setOpenModal={setOpenModal} />}
    <div className='sticky top-0 w-full left-0 bg-inherit flex items-center justify-between p-4 border-b border-solid border-white'>
        <h1 className='text-3xl select-none sm:text-6xl'>TODO LIST</h1>
         
 <div className='flex flex-col items-end justify-end'>
<i onClick={()=>{
  if(currentUser)

  
  setOpenModal(true)

}
  
  } className="fa-solid fa-user text-xl sm:text-3xl duration-300 hover:opacity-40 cursor-pointer"></i>
  
   {currentUser?  currentUser.email : ""} 
   { currentUser ?
   <>
   <button onClick={handleClick} className="text-blue-300 border border-solid rounded-full border-cyan-300 p-2 lowercase text-lg duration-300 hover:opacity-30">Connect</button>
  
   
   <p style={{fontSize:"14px"}}>{walletAddress}</p>
   <p style={{fontSize:"14px"}}>{walletAmount}</p></>
   : <></>
}
  </div>
  
 
        </div>
     
     
        </>
  )
}

export default Header