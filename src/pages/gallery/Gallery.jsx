import React from 'react'
import S2image1 from '../../assets/images/S2image1.jpg'
import S2image2 from '../../assets/images/S2image2.jpg'
import S2image3 from '../../assets/images/S2image3.jpg'
import S2image4 from '../../assets/images/S2image4.jpg'
import S2image5 from '../../assets/images/S2image5.jpg'
import S2image6 from '../../assets/images/S2image6.jpg'
import S2image7 from '../../assets/images/S2image7.jpg'
import S2image8 from '../../assets/images/S2image8.jpg'
import S2image9 from '../../assets/images/S2image9.jpg'
import S2image10 from '../../assets/images/S2image10.jpg'
import arrowLeft from '../../assets/images/arrow-2-left-long.svg'
import arrowRight from '../../assets/images/arrow-2-right-long.svg'
import Header from '../../components/Header'
import Footer from '../../components/Footer'


const Gallery = () => {
  return (
    <div className='m-0 p-0 font-[Roboto]'>
        <section className='m-4 -mt-20 text-justify mb-12 sm:mx-2 sm:mt-24'>
            <h1 className='text-[#BDBDBD] text-[32px] leading-[24px] sm:text-[64px] sm:leading-[44px] md:ml-3 lg:ml-6'>Photo</h1>
            <h1 className='font-bold text-[#333333] text-[32px] sm:text-[64px] md:ml-3 lg:ml-6'>Gallery</h1>
            <div className='mt-5 mb-5 grid gap-4 md:grid-cols-2 md:justify-center md:gap-2 md:ml-20 lg:grid-cols-5 lg:gap-4 lg:-ml-4'>
                <img src={S2image1} className='mb-5 mx-8 lg:mx-10 ' alt="" />
                <img src={S2image2} className='mb-5 mx-8 md:-mx-8 lg:mx-10' alt="" />
                <img src={S2image3} className='mb-5 mx-8 lg:mx-10 ' alt="" />
                <img src={S2image4} className='mb-5 mx-8 md:-mx-8 lg:mx-10' alt="" />
                <img src={S2image5} className='mb-5 mx-8 lg:mx-10 ' alt="" />
                <img src={S2image6} className='mb-5 mx-8 md:-mx-8 lg:mx-10' alt="" />
                <img src={S2image7} className='mb-5 mx-8 lg:mx-10 ' alt="" />
                <img src={S2image8} className='mb-5 mx-8 md:-mx-8 lg:mx-10' alt="" />
                <img src={S2image9} className='mb-5 mx-8 lg:mx-10 ' alt="" />
                <img src={S2image10} className='mb-5 mx-8 md:-mx-8 lg:mx-10' alt="" />
            </div>
            <div className='md:ml-3 lg:ml-6'>
                <span className='flex ms-36 mt-8 '>
                    <img src={arrowLeft} alt="" />
                    <img src={arrowRight} className='ms-12' alt="" />
                </span>
                <p className=' text-[#333333] -mt-6 sm:text-[24px]'>0</p>
                <p className='-mt-2 text-[#333333] md:text-[24px]'>1</p>
                <p className='ms-16 -mt-10 text-[#BDBDBD] md:text-[24px] md:-mt-16'>05</p>
            </div>
        </section>
    </div>
  )
}

export default Gallery
