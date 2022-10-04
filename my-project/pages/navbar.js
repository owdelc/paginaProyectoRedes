import { useState } from 'react'
import Image from 'next/image'
import imagen from '../public/favicon.ico'
import Link from 'next/link'

function NavLink({to, children}) {
    return <Link href={to} className={`mx-4`}>
        {children}
    </Link>
}

function MobileNav({open, setOpen}) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-lime-200 h-20"> {/*logo container*/}
                
            </div>
            <div className="flex flex-col ml-4">
                <Link href="/" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    <a  className="text-xl text-center hover:text-lime-200 font-medium my-4">HOME</a>
                </Link>
                <Link href="/download" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    <a className="text-xl text-center hover:text-lime-200 font-medium my-4">DOWNLOAD</a>
                </Link>
                <Link href="/rules" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    <a  className="text-xl text-center hover:text-lime-200 font-medium my-4">RULES</a>
                </Link>
                <Link href="/howto" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    <a  className="text-xl text-center hover:text-lime-200 font-medium my-4">HOW TO</a>
                </Link>
                <Link href="/about" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    <a  className="text-xl text-center hover:text-lime-200 font-medium my-4">ABOUT</a>
                </Link>
                <Link href="/contact" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    <a  className="text-xl text-center hover:text-lime-200 font-medium my-4">CONTACT</a>
                </Link>
            </div>  
        </div>
        
    )
}

export default function Navbar() {

    const [open, setOpen] = useState(false)
    return (
        <nav className="flex filter drop-shadow-lg bg-lime-200 px-4 py-4 h-20 items-center">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-3/12 flex items-center">
                <Link className="ml-12" href="/"><Image src={imagen} height='50px' width='50px'/></Link>
            </div>
            <div className="w-9/12 flex justify-end items-center">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden md:flex">
                <NavLink to="/">
                        <a className='p-4'>HOME</a>
                    </NavLink>
                    <NavLink to="/download">
                        <a className='p-4'>DOWNLOAD</a>
                    </NavLink>
                    <NavLink to="/rules">
                        <a className='p-4'>RULES</a>
                    </NavLink>
                    <NavLink to="howto">
                        <a className='p-4'>HOW TO</a>
                    </NavLink>
                    <NavLink to="/contact">
                        <a className='p-4'>CONTACT</a>
                    </NavLink>
                    <NavLink to="/about">
                        <a className='p-4'>ABOUT</a>
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}