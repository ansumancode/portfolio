'use client';
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';

const Header = ({menu}) => {
    const router = usePathname() 
    const [{items: getMenu}] = menu

  return (
    <>
    <nav className='md:container md:mx-auto md:px-40 md:py-20 py-5'>
      <ul className='flex md:justify-end sm:justify-center'>
      {
        getMenu && getMenu?.map((items, i)=>{
          return <li className={`p-5 pt-2 pb-2 outline-none  rounded-3xl text-white cursor-pointer ${router == items.slug.current ? "bg-gray-700" : "" }`} key={i}><Link href={items.slug.current} className='outline-none'>{items.name}</Link></li>
        })
      }
       </ul>
    </nav>
    </>
  )
}

export default Header

