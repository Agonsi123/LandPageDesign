import React from 'react'
import image13 from '../assets/images/image13.svg'
import location from '../assets/images/location icon.svg'
import phone from '../assets/images/phone icon.svg'
import email from '../assets/images/email icon.svg'
import facebook from '../assets/images/facebook.svg'
import twitter from '../assets/images/twitter.svg'
import Linked from '../assets/images/Linked In.svg'
import pininterest from '../assets/images/pininterest.svg'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='m-0 p-0 font-[Roboto]'>
        <footer className='bg-[#2c2c2c] text-gray-200 -ml-8 md:-ml-24 w-[360px] md:w-[1440px]'>
            <div className='container mx-auto py-14 px-6'>
                <div className='grid md:grid-cols-12 grid-cols-1 gap-7'>
                    <div className='lg:col-span-3 col-span-12 md:-mt-4'>
                        <Link to="/">
                            <img src={image13} className='h-12 md:size-32 ml-7 md:ml-16' alt="" />
                        </Link>
                    </div>
                    <div className='lg:col-span-2 md:col-span-4 col-span text-left ml-7'>
                        <h5 className='tracking-wide text-gray-100 font-semibold'>Information</h5>
                        <ul className='list-none mt-6 md:mt-8 space-y-2 > * + * md:space-y-4 text-[12px] md:text-[14px]'>
                            <li>
                                <Link to='/' className='mb-4'>
                                    <p className='hover:text-gray-400 transition-all duration-500 ease-in-out'>Main</p>
                                </Link>
                            </li>
                            <li>
                                <Link to='/gallery' className='mb-4'>
                                    <p className='hover:text-gray-400 transition-all duration-500 ease-in-out'>Gallery</p>
                                </Link>
                            </li>
                            <li>
                                <Link to='/projects' className='mb-4'>
                                    <p className='hover:text-gray-400 transition-all duration-500 ease-in-out'>Projects</p>
                                </Link>
                            </li>
                            {/* <li>
                                <a className='hover:text-gray-400 transition-all duration-500 ease-in-out' href="">Certifications</a>
                            </li> */}
                            <li>
                                <Link to='/contacts' className='mb-4'>
                                    <p className='hover:text-gray-400 transition-all duration-500 ease-in-out'>Contacts</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='lg:col-span-3 md:col-span-4 col-span-12 mt-[-10.5rem] md:mt-7 ml-48 text-left'>
                        <h5 className='tracking-wide text-gray-100 font-semibold -ml-3 md:-m-6'>Contacts</h5>
                        <ul className='list-none mt-10 md:mt-12 space-y-7 md:space-y-12 text-[12px] md:text-[14px]'>
                            <li>
                                <a className='hover:text-gray-400 transition-all duration-500 ease-in-out' href="">
                                    <img src={location} className='ml-[-1rem] md:ml-[-1.5rem] -m-3 md:-m-4 size-2 md:size-3' alt="" />
                                    1234 Sample Street<br/>Austin TX 76401
                                </a>
                            </li>
                            <li>
                                <a className='hover:text-gray-400 transition-all duration-500 ease-in-out' href="">
                                    <img src={phone} className='ml-[-1.2rem] md:ml-[-1.5rem] -m-3 md:-m-4 size-2 md:size-3' alt="" />
                                    512.333.2222
                                </a>
                            </li>
                            <li>
                                <a className='hover:text-gray-400 transition-all duration-500 ease-in-out' href="">
                                    <img src={email} className='-ml-5 md:-ml-6 -m-3 md:-m-4 size-2 md:size-3' alt="" />
                                    sampleemail@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='lg:col-span-3 md:col-span-4 col-span-12 -ml-56 md:ml-6'>
                        <h5 className='tracking-wide text-gray-100 font-semibold text-[14px] ml-[2.8rem] md:-ml-3 md:text-[16px]'>Social Media</h5>
                        <div className='lg:col-span-4 col-span-12 flex justify-center space-x-4 md:space-x-8 mt-4 md:mt-9 ml-[4.4rem] md:ml-16'>
                            <img src={facebook} className='size-4 md:size-auto' alt="" />
                            <img src={twitter} className='size-4 md:size-auto' alt="" />
                            <img src={Linked} className='size-4 md:size-auto' alt="" />
                            <img src={pininterest} className='size-4 md:size-auto' alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-t border-slate-700'>
                <div className='text-center container mx-auto py-7 px-6'>
                    <p className='mb-0 text-[rgb(104,94,94)] md:text-slate-600 text-[12px]'>
                        &copy; 2024 All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer