import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { CiMenuBurger } from "react-icons/ci";
import { accentColor } from '@/pages';

const navLinks = [
  {name: 'Home', href: '/'},
  {name: 'Courses', href: '/courses'},
  {name: 'Careers', href: '/career'},
  {name: 'Blog', href: '/blog'},
  {name: 'About us', href: '/about'}
]

const Navbar = () => {
  const router = useRouter();
  return (
    <div className={`navbar ${accentColor} lg:flex relative px-4 lg:px-32 shadow-none`}>
      <div className="navbar-start lg:flex-1">
    
   
    <Link href="/">
      <Image
       src="/images/icon.png" 
       alt="Logo" 
       className="h-10 w-15 object-contain" 
       width={114}
       height={83}
       priority
       />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex flex-2 justify-center px-6 text-black">
    <ul className="menu menu-horizontal px-4">
      {navLinks.map((link) => (
        <li key={link.name}>
          <Link
            href={link.href}
            className={router.pathname === link.href ? 'font-semibold text-primary' :
              'font-normal text-base-content'}>{link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
  <div className="navbar-end lg:flex-1 gap-2 sticky top-0 z-50">
    {/* <div className="md:hidden "> */}
    <Link href='/login' className="hidden md:inline-flex lg:inline-flex btn bg-white text-black border-0 rounded-full h-[35] transition hover:bg-black hover:text-white shadow-none">Login</Link>
    <Link href='/login' className="hidden md:inline-flex lg:inline-flex btn btn-neutral btn-outline rounded-2xl h-[35] bg-white/30 shadow-none border-none text-white hover:bg-white hover:text-black">Sign up</Link>
    {/* </div> */}
    <div className="dropdown max-w-fit">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <CiMenuBurger className="size-6" />
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-[#49BBBD] z-1 mt-3 p-2 shadow left-0 fixed right-0 w-screen max-w-screen">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={router.pathname === link.href ? 'font-semibold text-primary' :
                  'font-normal text-base-content'}> {link.name}
              </Link>
            </li>
          ))}
      <div className='md:hidden lg:hidden flex justify-center gap-2'>
      <Link 
      href= "/login"
      className="btn bg-white text-black border-0 rounded-full h-[35] transition hover:bg-black hover:text-white shadow-none">
        Login
      </Link>
      <Link
      href= "/login"
      className="btn btn-neutral btn-outline rounded-2xl h-[35] bg-white/30 shadow-none border-none text-white hover:bg-white hover:text-black">
        Sign up
        </Link>
      </div>
      </ul>
     
    </div>
  </div>
</div>
  )
}

export default Navbar
