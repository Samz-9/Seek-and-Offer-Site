"use client"
import React, { useEffect, useState } from 'react'
import confetti from 'canvas-confetti';
import { fetchusername } from '@/actions/useractions';


const Userpage = ({ params }) => {
    useEffect(() => {
        getdata(params)
    },[]);

    const [user, setuser] = useState({})

    const getdata = async (username) => {
        let user = await fetchusername(username)
        setuser(user)
    }

    

    const [paymentform, setpaymentform] = useState({ name: '', message: '', amount: '' })
    const handlechange = (e) => {
        setpaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }
    const onpay = () => {
        setpaymentform({ name: '', message: '', amount: '' })
        confetti({
            particleCount: 400,
            spread: 200,
            origin: { x: 0.5, y: 0.5 },
            scale: 1.2
        });
    }
    const updamount = (money) => {
        setpaymentform({ ...paymentform, amount: money })
    }
 
    return (
        <div className='bg-gray-200 h-[80vh] overflow-y-auto'>
            <div className='relative'>
                <img className='object-cover w-full h-[35vh]' src={user.coverpic} alt="cover" />
                <div className='border absolute top-[145px] left-[30%] border-black h-36 w-36 rounded-full '>
                    <img className='object-cover w-36 rounded-full h-36' src={user.profilepic} alt="" />
                </div>
                <div className='text-black'>
                    <div className='text-xxl font-bold text-center'>{user.username}</div>
                    <div className='text-sm text-gray-700 text-center'>Works For upliftment of ----- society</div>
                    <div className='text-sm text-gray-700 text-center'>891K members . 2000 Posts . </div>
                </div>
            </div>
            <div className='text-black w-full p-3 flex gap-3'>
                <div className="listofnames w-1/2 p-2 border bg-gray-300 border-black ">
                    <div className='text-center font-bold text-xl text-slate-500'>Supporters</div>
                    <ul className='p-2 font-serif'>
                        <li className='flex items-center gap-2 m-1'><img className='w-8 h-8 rounded-full border' src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="profile" />Carti Donated <span className='font-bold'>20$</span> with a message ""</li>
                        <li className='flex items-center gap-2 m-1'><img className='w-8 h-8 rounded-full border' src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="profile" />Rahul Donated <span className='font-bold'>50$</span> with a message ""</li>
                        <li className='flex items-center gap-2 m-1'><img className='w-8 h-8 rounded-full border' src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="profile" />Samz Donated <span className='font-bold'>100$</span> with a message ""</li>
                    </ul>
                </div>
                <div className="makepayment w-1/2 p-2 border bg-gray-300 border-black">
                    <div className='text-center font-bold text-xl text-slate-500'>Make Payment</div>
                    <div className='p-2 flex-col space-y-1'>
                        <input onChange={handlechange} value={paymentform.name} className='w-full rounded-full p-2 indent-2 bg-gray-500 text-white' type="text" placeholder='Enter Name' name='name' />
                        <input onChange={handlechange} value={paymentform.message} className='w-full rounded-full p-2 indent-2 bg-gray-500 text-white' type="text" placeholder='Message' name='message' />
                        <input onChange={handlechange} value={paymentform.amount} className='w-full rounded-full p-2 indent-2 bg-gray-500 text-white' type="text" placeholder='Enter Amount' name='amount' />
                        <button id="hs-run-on-click-run-confetti" type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-full w-full text-sm px-5 py-2.5 text-center" onClick={onpay} >PAY</button>

                    </div>
                    <div className='flex gap-4 px-3 text-[15px] text-white'>
                        <div onClick={() => updamount(10)} className="bg-gray-800 hover:cursor-pointer hover:bg-gray-700 py-2 px-3 rounded-full">Pay 10$</div>
                        <div onClick={() => updamount(20)} className="bg-gray-800 hover:cursor-pointer hover:bg-gray-700 py-2 px-3 rounded-full">Pay 20$</div>
                        <div onClick={() => updamount(50)} className="bg-gray-800 hover:cursor-pointer hover:bg-gray-700 py-2 px-3 rounded-full">Pay 50$</div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Userpage
