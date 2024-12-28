"use client";
import { useState } from 'react';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';


export default function Header() {
  const [menueOpen, setMenueOpen] = useState(false)
  return (
    < header className="max-w-[1289] h-[100px] mx-auto flex justify-between items-center relative z-10">
      <div className="w-[185px] h-[32px] flex items-center ">
        <Image src="/logo.png"
        alt="logo"
        height={41}
        width={50}
        className='md:w-auto w-8 h-8'
         />
      <h1 className="lg:text-[34px]/[49px] md:text-3xl text-2xl font-bold font-montserrat mt-1">Furniro</h1>
      </div>
      <div/>
    

    {/* navebar  */}
    <div className="md-hidden absolute top-9 right-1">
      <button
      onClick={() => setMenueOpen(!menueOpen)}
      className="text-2xl focus:outline-none"
      >
        {/* {menueOpen ? "X" : "☰"} */}

      </button>

    </div>

    {/* Navigation Links */}

    <ul className={`${
        menueOpen ? "flex" : "hidden"
      } 
       md:flex flex-col md:flex-row md:gap-10 absolute md:relative top-16 lg:right-96 right-1 md:right-64 md:top-0 bg-white md:bg-transparent w-[100px] md:w-auto text-sm lg:text-base font-medium font-poppins z-20 `}>
      <li><Link href="/" className="block p-3 md:p-0 hover:underline active:underline">Home</Link></li>
      <li><Link href="/shop" className="block p-3 md:p-0 hover:underline active:underline">Shop</Link></li>
      <li><Link href="/blog" className="block p-3 md:p-0 hover:underline active:underline">Blog</Link></li>
      <li><Link href="/contact" className="block p-3 md:p-0 hover:underline active:underline">Contact</Link></li>
    </ul>

    {/* Icon */}
    <div className="flex gap-2 lg:gap-3 items-center absolute right-12">
      <Link href={""}><Image src={"/profile-icon.png"} alt="Profile icon" width={23.33} height={18.67}/></Link>
      <Link href={""}><Image src={"/icon-search.png"} alt="Profile icon" width={22.17} height={22.17}/></Link>
      <Link href={""}><Image src={"/heart.png"} alt="Profile icon" width={35.33} height={26.81}/></Link>
      <Link href={""}><Image src={"/shopping-cart.png"} alt="Profile icon" width={24.53} height={22.06}/></Link>
    </div>


    </header>
  )
    
}

