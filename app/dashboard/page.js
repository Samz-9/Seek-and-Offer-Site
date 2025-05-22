"use client"
import React, { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';
import { fetchuser, updatedata } from '@/actions/useractions';


const Dashboard = () => {
    const { data: session } = useSession()
    const router = useRouter()
    useEffect(() => {
        if (!session) {
            router.push('/login');
        }
        else {
            getuser()
        }

    }, [session, router]);
    const [form, setForm] = useState({})

    const getuser = async () => {
        let user = await fetchuser(session.user.email);
        setForm(user)
    }

    const handlechange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handlesave = async () => {
        await updatedata(form)
        alert('Data Saved')
    }

    return (
        <div className='text-white max-h-screen'>
            <div className='text-2xl font-bold text-center m-5'>Welcome To Your Dashboard</div>
            <ul className='text-sm font-bold w-[60vw] space-y-2 m-auto'>
                <li>Name
                    <input name='name' onChange={handlechange} value={form.name ? form.name : ''} type="text" className='bg-gray-600 text-black rounded-full p-1 indent-4 w-full' />
                </li>
                <li>Email
                    <input name='email' onChange={handlechange} value={form.email ? form.email : ''} type="text" className='bg-gray-600 text-black rounded-full p-1 indent-4 w-full' />
                </li>
                <li>Username
                    <input name='username' onChange={handlechange} value={form.username ? form.username : ''} type="text" className='bg-gray-600 text-black rounded-full p-1 indent-4 w-full' />
                </li>
                <li>Profile Picture
                    <input name='profilepic' onChange={handlechange} value={form.profilepic ? form.profilepic : ''} type="text" className='bg-gray-600 text-black rounded-full p-1 indent-4 w-full' />
                </li>
                <li>Cover Picture
                    <input name='coverpic' onChange={handlechange} value={form.coverpic ? form.coverpic : ''} type="text" className='bg-gray-600 text-black rounded-full p-1 indent-4 w-full' />
                </li>
                <li>RazorPay Credentials
                    <input name='razorpayc' onChange={handlechange} value={form.razorpayc ? form.razorpayc : ''} type="text" className='bg-gray-600 text-black rounded-full p-1 indent-4 w-full' />
                </li>
            </ul>
            <div onClick={handlesave} className="w-[60vw] hover:cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-3xl text-base px-5 py-2 text-center my-3 mx-auto">Save</div>

        </div>
    )
}

export default Dashboard
