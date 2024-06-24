import React from 'react'
import S4image9 from '../../assets/images/S4image1.jpg'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Contacts = () => {
  return (
    <div className='m-0 p-0 font-[Roboto]'>
        <section className='m:4 -mt-24 text-justify mb-12 md:mx-10 md:-mt-24 md:ml-6'>
            <div className='md:flex md:flex-col lg:flex-row lg:items-center'>
                <div className=''>
                    <div className='md:w[338px] md:mt-14'>
                        <h1 className='text-[#BDBDBD] text-[32px] md:text-[64px] md:leading-[44px]'>Contact</h1>
                        <h1 className='font-bold text-[#333333] text-[32px] -my-3 md:text-[64px]'>Information</h1>
                    </div>
                    <div className='mt-10'>
                        <div className='md:w-[280px] md:mt-2 '>
                            <h5 className='font-bold md:text-[18px]'>Company Name</h5>
                            <span className='md:text-[16px]'>1234 Sample Street Austin Texas 76401</span>
                        </div>
                        <p className='mt-4 md:mt-16'>512.333.2222</p>
                        <p className='mt-4 md:mt-16'>sampleemail@gmail.com</p>
                        <button className='flex  px-12 p-4 bg-gray-600 text-white text-[8px] text-center leading-[22px] mt-4 md:mt-8'>CONTACT US</button>
                    </div>
                </div>
                <div className=''>
                    <img src={S4image9} className='mt-5 md:w-[800px] md:h-[501px] border-[1px] md:mt-16 lg:top-[105px] lg:left-[650px] lg:ml-36' alt="" />
                </div>
            </div>
        </section>
    </div>
  )
}

export default Contacts
