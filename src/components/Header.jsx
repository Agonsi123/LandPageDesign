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
                <div className='md:static absolute  md:min-h-fit min-h-[20vh] left-4 top-[8%] ml-20 mt-[-4.4rem] md:mt-1 md:w-auto flex items-center px-5 '>
                    <ul className='flex md:flex-row  md:items-center md:gap-[9.2vw] gap-4'>
                            <li>
                                <NavLink to="/" exact
                                activeClassName="active">
                                    <a className='hover:text-blue-500 text-[8px] md:text-[12px]' href=''>MAIN</a>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/gallery" exact
                                activeClassName="active">
                                    <a className='hover:text-blue-500 text-[8px] md:text-[12px]' href=''>GALLERY</a>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/projects" exact
                                activeClassName="active">
                                    <a className='hover:text-blue-500 text-[8px] md:text-[12px]' href=''>PROJECTS</a>
                                </NavLink>
                            </li>
                        {/* <li>
                            <a className='hover:text-blue-500' href='#'>CERTIFICATIONS</a>
                        </li> */}
                            <li>
                                <NavLink to="/contacts" exact
                                activeClassName="active">
                                    <a className='hover:text-blue-500 text-[8px] md:text-[12px]' href=''>CONTACTS</a>
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