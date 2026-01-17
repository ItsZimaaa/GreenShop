import React from 'react'
import Logo from "../assets/Logo.svg"
import { LuLogIn } from 'react-icons/lu'
import { Handbag, Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import Category from '../Pages/Category'

export default function Navbar() {

    const NavData = [
        {
            nav: "Home",
            link: "/"
        },
        {
            nav: "Shop",
            link: "/Shop"
        },
        {
            nav: "Plant Care",
            link: "/Care"
        },
        {
            nav: "Blogs",
            link: "/Blogs"
        },
    ]

    return (
        <nav className='sticky'>
            <div className='flex justify-between items-center side py-4 text-black-90'>
                <img src={Logo} alt="Logo" className='hover:scale-110 ease-in-out duration-300 hover:text-green-100' />

                <ul className='flex items-center gap-20 text-[16px] font-medium  cursor-pointer'>
                    {NavData.map((item, i) => (
                        <li key={i} className='hover:text-green-100 hover:scale-105 ease-in-out duration-300'>{item.nav}</li>
                    ))}
                </ul>

                <div className='flex items-center gap-6'>
                    <Search className='hover:scale-105 ease-in-out duration-300 hover:text-green-100' />
                    <Link to="/category" className="hover:text-green-100 duration-300"><Handbag /></Link>


                    {/* <Handbag className='hover:scale-105 ease-in-out duration-300 hover:text-green-100' /> */}
                    <button className='button'>
                        <LuLogIn size={20} />
                        Login
                    </button>
                </div>
            </div>
            <hr className="my-2 side border-0 h-px bg-linear-to-r from-transparent via-black-90 to-transparent" />

        </nav>
    )
}
