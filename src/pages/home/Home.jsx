import React from 'react'
import image from '../../assets/images/image1.jpg'
import image2 from '../../assets/images/image2.jpg'
import image3 from '../../assets/images/image3.jpg'
import image4 from '../../assets/images/image4.jpg'
import arrowRight from '../../assets/images/arrow-2-right-long.svg'
import image5 from '../../assets/images/image5.jpg'
import image6 from '../../assets/images/image6.jpg'
import image7 from '../../assets/images/image7.jpg'
import image8 from '../../assets/images/image8.jpg'
import image9 from '../../assets/images/image9.jpg'
import arrowLeft from '../../assets/images/arrow-2-left-long.svg'
import image10 from '../../assets/images/image10.jpg'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'



const Home = () => {
  return (
      <div className='m-0 p-0 font-[Roboto]'>
        <section className='m-4 -mt-28 text-justify mb-12 lg:mx-10 md:-mt-16'>
            <div className=" relative lg:flex lg:flex-row lg:items-center md:flex-col-reverse md:relative">
                <div className='absolute ml-24 mt-28 z-50 lg:relative lg:ml-3 lg:mt-0 md:absolute md:ml-72 md:mt-80 md:z-50'>
                    <h1 className='text-[#fff] text-[18px] leading-[18px] lg:text-[#BDBDBD] md:text-[30px] lg:text-[64px] lg:leading-[44px] lg:mt-48'>PROJECT</h1>
                    <h1 className='font-bold text-[#fff] text-[18px] text-center lg:text-justify md:text-[30px] lg:text-[64px] lg:text-[#333333]'>Lorum</h1>
                    <span className='flex lg:mt-20 lg:mx-4'>
                        <img src={arrowLeft} className='size-0 -mt-1 md:size-0 lg:size-7' alt="" />
                        <img src={arrowRight} className='ms-8 size-0 md:size-0 -mt-1 lg:size-7' alt="" />
                    </span>
                    <p className=' text-[#BDBDBD] text-[0px] md:text-[0px] lg:text-[24px] lg:mt-20'>0</p>
                    <p className='-mt-1 text-[#BDBDBD] text-[0px] lg:text-[24px] md:text-[0px] md:-mt-1'>1</p>
                    <p className='mx-10 -mt-6 text-[#BDBDBD] text-[0px] md:text-[0px] lg:text-[24px] lg:mx-24 lg:-mt-[4.2rem]'>02</p>
                    <Link to='/projects'>
                        <button className='flex p-1 bg-white text-[#333333] text-[8px] text-center leading-[22px] mt-7 md:text-[12px] md:ml-3  lg:text-[12px] lg:flex lg:px-16 lg:p-4 lg:mt-[5.7rem] lg:absolute lg:left-[21.9rem] lg:z-40'>VIEWPROJECT<span><img src={arrowRight} className='size-2 mt-[0.45rem] md:size-3 md:mt-[0.35rem] lg:size-4 lg:mt-1 lg:ml-3' alt="" /></span></button>
                    </Link>
                </div>
                <div className='mt-6 mb-5  lg:relative'>
                    <img src={image} className='contrast-50 md:ml-1 lg:ml-24 lg:filter-none' alt="" />
                </div>
            </div>
        </section>
        <section className=' m-4 mt-8 text-justify mb-12 md:mt-28 lg:mt-20 md:mx-2 lg:mx-10'>
            <div className='lg:flex flex-row-reverse lg:items-center lg:w-[1170px] lg:h-[465px] lg:-mx-16'>
                <div className='mt-8 sm:ml-8'>
                    <h1 className='text-[#BDBDBD] leading-[64px] text-[30px] font-[300] text-left md:text-[40px] lg:text-[64px] -mt-5 sm:-mt-16'>About</h1>
                    <p className='text-[#000000] leading-[25px] text-[12px] text-left md:text-justify md:text-[17px] lg:text-[18px] lg:w-[400px] md:w-[630px] lg:h-[200px] lg:mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, adipisci quis. Fuga, eius veritatis ratione facilis aut beatae debitis itaque officia temporibus facere, dolore sequi. Vel perferendis expedita inventore illum ad deserunt est distinctio pariatur, sunt quia natus sequi tempore facere earum voluptatum aut maxime! Eum, nam nostrum iure qui cum aspernatur quasi at eos est laborum velit sunt. Ducimus, quia delectus.</p>
                    <p className='mt-7 mb-5 flex flex-row text-left sm:text-[12px]'>READ MORE <span><img src={arrowRight} className='ml-3 sm:-mt-1' alt="" /></span></p>
                </div>
                <div className='mb-5 flex space-x-4 > * + * lg:space-x-8 > * + * md:space-x-16 > * + * md:ml-5'>
                    <div >
                        <img src={image2} className='w-36 md:w-[290px] lg:w-[270px] md:h-[295px] lg:h-[265px]' alt="" />
                        <img src={image3} className='w-36 mt-4 md:w-[290px] lg:w-[270px] md:h-[170px] lg:h-[140px] md:mt-16 lg:mt-8' alt="" />
                    </div>
                    <div className='mt-8 mb-5 md:mt-14 lg:mt-12'>
                        <img src={image4} className='w-36 md:w-[290px] lg:w-[270px] md:h-[375px] lg:h-[345px]' alt="" />
                    </div>
                </div>
            </div>
        </section>
        <section className='m-4 mt-8 text-justify mb-12 lg:mt-20 lg:mx-10'>
            <h1 className='text-[#BDBDBD] leading-[36px] text-[30px] font-[300] text-left md:text-[40px] md:ml-3 md:mt-1 lg:ml-1 lg:text-[64px] -mt-5'>Main Focus/Mission Statement</h1>
            <div className='lg:flex flex-row lg:items-center md:space-x-12 > * + * lg:space-x-60 > * + *'>
                <div className='flex text-center mt-4 ml-9 md:mt-8 lg:mt-14 md:ml-7 lg:ml-24'>
                    <h1 className='text-[#f2f2f2] text-[36px] leading-[30px] -ml-12 md:text-[40px] lg:text-[175px] lg:mt-10 lg:font-[900]'>1</h1>
                    <p className='text-[#333333] mx-2 text-left text-[12px] md:text-[17px] md:text-justify lg:text-[20px] lg:w-[223px] sm:h-[144px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sequi saepe ad debitis quod.</p>
                </div>
                <div className='flex text-center mt-4 ml-9 md:-mt-24 lg:mt-14'>
                    <h1 className='text-[#f2f2f2] text-[36px] leading-[30px] -ml-12 md:-ml-16 md:text-[40px] lg:text-[175px] md:mt-1 lg:mt-10 md:font-[600] lg:font-[900]'>2</h1>
                    <p className='text-[#333333] mx-2 text-left text-[12px] md:text-[17px] md:text-justify lg:text-[20px] lg:w-[410px] md:w-[630px] lg:h-[144px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, possimus. Amet asperiores cumque, soluta velit pariatur ipsa porro nobis distinctio dignissimos labore hic rerum!</p>
                </div>
            </div>
        </section>
        <section className=' m-4 mt-8 text-justify mb-12 lg:mt-20 lg:mx-9 lg:relative'>
            <h1 className='text-[#BDBDBD] leading-[36px] text-[30px] font-[300] text-left -mt-5 md:text-[40px] md:ml-3 lg:text-[64px] lg:ml-1'>Our Projects</h1>
            <div className='mt-5 relative lg:flex flex-row lg:space-x-8 md:mt-10 lg:mt-14 lg:relative lg:-ml-8'>
                <div className='absolute text-white top-10 left-[6.3rem] font-[700] z-40 sm:w-[233px] sm:h-[160px] sm:absolute sm:left-28 sm:top-12 sm:text-white'>
                    <h1 className='text-[24px] leading-[24px] sm:text-[64px] sm:leading-[64px]'>Sample<br />Project</h1>
                    <p className='flex flex-row text-left text-[8px] leading-[12px] mt-1 sm:mt-2'>VIEW MORE <span><img src={arrowRight} className='ml-3 -my-1.5' alt="" /></span></p>
                </div>
                <img src={image5} className='mb-5 contrast-50 md:mb-10 md:w-[730px] md:-ml-1' alt="" />
                <img src={image6} className='sm:h-[255px] md:mb-10 md:w-[730px] md:-ml-1' alt="" />
            </div>
            <div className='mt-5 lg:flex flex-row lg:space-x-8 lg:-mt-2 lg:ml-1'>
                <img src={image7} className='mb-5 w-[400px] md:mb-10 md:w-[730px] md:-ml-1' alt="" />
                <img src={image8} className='mb-5 md:mb-10 md:w-[730px] md:-ml-1' alt="" />
                <img src={image9} className='mb-5 md:mb-10 md:w-[730px] md:-ml-1' alt="" />
            </div>
            <Link to='/projects'>
                <button className='flex  px-12 p-4 bg-gray-600 text-white text-[8px] text-center leading-[22px] lg:absolute lg:-right-8 md:-ml-1 lg:mt-2'>ALL PROJECTS <span><img src={arrowRight} className='ml-3' alt="" /></span></button>
            </Link>
        </section>
        <section className='m-4 mt-8 text-justify mb-12 md:-mb-44 lg:mb-16 sm:mt-20 sm:mx-10 sm:h-[603px]'>
            <h1 className='text-[#BDBDBD] leading-[36px] text-[30px] font-[300] text-left -mt-5 md:text-[40px] md:-ml-7 md:-mt-12 lg:text-[64px] lg:mt-36 lg:-ml-3'>Contact Us</h1>
            <div className='mt-5 sm:flex flex-row sm:space-x-8 sm:mt-14'>
                <form className='-ml-1 md:w-[749px] lg:h-[369px] md:-ml-7 md:-mt-5  lg:mt-3 lg:-ml-3' action="">
                    <input className='border-hidden py-1 px-4 bg-[#F3F3F3] text-[12px] md:text-[17px] mb-1 w-[270px] lg:mb-3 lg:w-[391px] lg:h-[46px]' type="text" placeholder='name' />
                    <input className='border-hidden py-1 px-4 bg-[#F3F3F3] text-[12px] md:text-[17px] mb-1 w-[270px] lg:mb-3 lg:w-[391px] lg:h-[46px]' type="text" placeholder='Phone Number*' />
                    <input className='border-hidden py-1 px-4 bg-[#F3F3F3] text-[12px] md:text-[17px] mb-1 w-[270px] lg:mb-3 lg:w-[391px] lg:h-[46px]' type="email" placeholder='Email*' />
                    <input className='border-hidden py-1 px-4 bg-[#F3F3F3] text-[12px] md:text-[17px] mb-1 w-[270px] lg:mb-3 lg:w-[391px] lg:h-[46px]' type="text" placeholder='Interested In*' />
                    <textarea className='border-hidden py-1 px-4 bg-[#F3F3F3] text-[12px] md:text-[17px] mb-1 w-[270px] lg:mb-3 lg:w-[391px] lg:h-[147px]' type="textarea" placeholder='Message*' />
                </form>
                <div className='mt-5 mb-5 md:mt-1 lg:mt-4'>
                    <img src={image10} className=' md:w-[760px] lg:w-[749px] md:h-[184px] lg:h-[375px]' alt="" />
                </div>
            </div>
            <button className='flex px-12 p-4 bg-gray-600 text-white text-[8px] text-center leading-[22px] sm:mt-8 md:-ml-7 lg:-ml-3'>SEND EMAIL <span><img src={arrowRight} className='ml-3' alt="" /></span></button>
        </section>

    </div>
  )
}

export default Home
