import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navber from './Navbar'

const Confirm = () => {
    const navigate = useNavigate()

    const handelShow = ()=>{
      navigate('/')
  }

return (
<>
<Navber />
<div className="main bg-white">
    <div className="container  flex  justify-center items-center min-h-screen ">


<div className="confirm text-center">
    <img src="https://cdn.dribbble.com/users/3182337/screenshots/17607436/media/d7a943c2a8f79654c70c28eebebf8500.gif" alt="confirm" />
        <h1 className='font-lato text-[70px] text-black font-extrabold'>Order Confirmed</h1>
        <button onClick={handelShow} className='w-[228px] h-[45px] mt-[10px] bg-[#3749BB0D] hover:text-white hover:bg-[#3749bb] rounded font-lato font-semibold text-[#3749bb]'>Continue Shopping</button>
</div>

    </div>


</div>

</>
)
}

export default Confirm