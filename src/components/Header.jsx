import React from 'react'
import image12 from '../assets/images/image12.svg'
import {NavLink} from 'react-router-dom'
import './Header.css'


const Header = () => {
  return (
    <div className='font-[Roboto]'>
        <header className='mb-32 md:mb-4'>
            <nav className='flex justify-between items-center w-[92%] mx-auto'>
                <div className='size-9 md:size-full'>
                    <img src={image12} alt="" />
                </div>
                <div className='md:static absolute md:min-h-fit min-h-[20vh] left-4 top-[8%] ml-20 mt-[-4.4rem] md:mt-2 md:w-auto flex items-center px-5 '>
                    <ul className='flex md:flex-row md:items-center md:gap-[9.8vw] gap-4'>
                            <li className='hover:text-blue-500 text-[8px] md:text-[12px]'>
                                <NavLink to="/">
                                    MAIN
                                </NavLink>
                            </li>
                            <li className='hover:text-blue-500 text-[8px] md:text-[12px]'>
                                <NavLink to="/gallery">
                                    GALLERY
                                </NavLink>
                            </li>
                            <li className='hover:text-blue-500 text-[8px] md:text-[12px]'>
                                <NavLink to="/projects">
                                    PROJECTS
                                </NavLink>
                            </li>
                        {/* <li>
                            <a className='hover:text-blue-500' href='#'>CERTIFICATIONS</a>
                        </li> */}
                            <li className='hover:text-blue-500 text-[8px] md:text-[12px]'>
                                <NavLink to="/contacts">
                                    CONTACTS
                                </NavLink>
                            </li>
                    </ul>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Header
