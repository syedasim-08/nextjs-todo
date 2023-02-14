import React, { useState, useEffect } from 'react'
import { useAuth } from '@/context/AuthContext'
import { async } from '@firebase/util'
import TodoCard from './TodoCard'
// import { WalletCard } from './WalletCard'

const UserDashboard = () => {
 
  const [addTodo, setAddTodo] = useState(false)
  const [todo, setTodo] = useState("")
  const [todoList, setTodoList] = useState({})

  const { userInfo } = useAuth()

  useEffect(()=>{
    if(!userInfo || Object.keys(userInfo).length === 0)

    setAddTodo(true)

  },[])

  async function handleTodo() {
  
    if(!todo) { return}


    const newKey = Object.keys(todoList).length === 0 ? 1 : Math.max(...Object.keys(todoList)) + 1 

    setTodoList({...todoList,[newKey]: todo})

    setTodo("")
  }

   const handleEnterKey = (e)=>{
      if(e.keyCode === 13) 
      handleTodo();
    
   }

  //  const handleDelete = ()=>{
  //   setTodoList(prev=>Object.keys(prev).filter(x=> ))
   
  //  }
   
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
    
    <div className='w-full max-w-[65ch] text-xl sm:text-sm mx-auto flex flex-col gap-3 sm:gap-5'>
   { addTodo && <div className='flex'>
      <input onKeyDown={handleEnterKey} type="text" placeholder='Enter Todo' value={todo} onChange={(e)=>setTodo(e.target.value)} 
      className="outline-none p-3 text-base sm:text-lg text-slate-900 flex-1"   />
      <button onClick={handleTodo} className='w-fit px-4 sm:px-6 py-2 sm:py-3 bg-amber-400 text-white font-medium text-base duration-300 hover:opacity-40'>Add</button>
     
</div>}
      {
        userInfo && (
        <>
        {
          Object.keys(todoList).map((todo,i)=>{
            return (
              
              <TodoCard key={i}>
                {todoList[todo]}
                 </TodoCard>
            
              

              
            )
          })
        }

        </>)
      }
      
{ !addTodo &&
<button className="text-cyan-300 border border-solid border-cyan-300 py-2 uppercase text-lg duration-300 hover:opacity-30" onClick={()=> setAddTodo(true)}>ADD TODO</button>
}


   </div>

  )
}

export default UserDashboard