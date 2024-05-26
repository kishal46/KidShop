import React from 'react'
import { useNavigate } from 'react-router-dom'
import Authuse from './Auth'
import { ToastContainer, toast } from 'react-toastify'
export default function Profile() {
    const auth=Authuse()
    const navigate=useNavigate()
    const handleLogout=()=>{
        auth.setUserName('')
        toast("Thank you for wisiting",{
          position:'top-center',
          autoClose:3000,
          theme:"dark"
        })
        toast.success("Logout Successful!", {
          position:'top-center',
          autoClose:3000,
          theme:"dark",
          onClose: () => navigate('/')
      });

    }
  return (
    <div>
      <ToastContainer/>
        Welcome --- {auth.userName}<br></br>
        <button onClick={handleLogout} className='logout'>Logout </button>
    </div>
  )
}