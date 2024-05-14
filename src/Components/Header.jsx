import React, { useState } from 'react';
import { CiDiscount1, CiShoppingCart } from 'react-icons/ci';
import { GoSignIn } from 'react-icons/go';
import { IoIosSearch, IoMdHelp, IoMdHelpCircleOutline } from 'react-icons/io';
import { RxCaretDown } from "react-icons/rx";

export default function Header() {
    const [toggle, setToggle] = useState(false);

    const showSideMenu = () => {
        setToggle(true)
    }

    const hideSideMenu = () => {
        setToggle(false)
    }

    const links = [
        {
            icon: <IoIosSearch/>,
            name: "Search"
        },
        {
            icon: <CiDiscount1 />,
            name: "Offers"
        },
        {
            icon: <IoMdHelpCircleOutline/>,
            name: "Help"
        },
        {
            icon: <GoSignIn/>,
            name: "Sign In"
        },
        {
            icon: <CiShoppingCart/>,
            name: "Cart"
        },
    ]

  return (
    <>
    <div className='black-overlay w-full h-full fixed duration-500' onClick={hideSideMenu} style={{
        opacity: toggle ? 1 : 0,
        visibility: toggle ? "visible" : "hidden"
    }}>
        <div onClick={(e) => {
            e.stopPropagation();
        }} className='w-[500px] bg-white h-full absolute duration-[400ms]' 
        style={{
            left: toggle ? '0%' : '-100%'
        }}></div>
    </div>

    <header className='p-[15px] shadow-xl text-[#686b78]'>
        <div className='max-w-[1200px] mx-auto flex items-center'>
            <div className='w-[80px]'>
            <img src="img/logo.png" alt="" className='w-full' />
            </div>
            <div className=''>
                <span className='font-bold border-b-[3px] border-[black]'>Others</span> <RxCaretDown onClick={showSideMenu} fontSize={25} className='font-bold inline text-[#fc8019] cursor-pointer'/>
            </div>
            <nav className='flex list-none gap-10 ml-auto text-[18px] font-semibold'>
                <input type="search" placeholder='Search ' className='border border-black w-[300px] p-2 rounded-md lg:hidden'/>
                <ul className='hidden lg:flex gap-16'>
                    {
                    links.map(
                        (link, index) => {
                        return <li className='cursor-pointer flex items-center hover:text-[#fc8019]'key={index}>
                            {link.icon} &nbsp;
                            {link.name}
                        </li>
                        }
                        )
                    }
                </ul>
            </nav>
        </div>
    </header>
    </>
  )
}
