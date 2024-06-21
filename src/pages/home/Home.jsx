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
        <section className='-mt-28 text-justify mb-12 md:mx-10 md:mt-8'>
            <div className=" relative md:flex md:flex-row md:items-center">
                <div className='absolute ml-28 mt-28 z-50 md:relative md:ml-3 md:mt-0'>
                    <h1 className='text-[#fff] text-[18px] leading-[18px] md:text-[#BDBDBD] md:text-[64px] md:leading-[44px] md:mt-48'>PROJECT</h1>
                    <h1 className='font-bold text-[#fff] text-[18px] text-center md:text-justify md:text-[64px] md:text-[#333333]'>Lorum</h1>
                    <span className='flex md:mt-20 md:mx-4'>
                        <img src={arrowLeft} className='size-0 -mt-1 md:size-7' alt="" />
                        <img src={arrowRight} className='ms-8 size-0 -mt-1 md:size-7' alt="" />
                    </span>
                    <p className=' text-[#BDBDBD] text-[0px] md:text-[24px] md:mt-20'>0</p>
                    <p className='-mt-1 text-[#BDBDBD] text-[0px] md:text-[24px]'>1</p>
                    <p className='mx-10 -mt-6 text-[#BDBDBD] text-[0px] md:text-[24px] md:mx-24 md:-mt-[4.2rem]'>02</p>
                    <Link to='/projects'>
                        <button className='flex p-1 bg-white text-[#333333] text-[8px] text-center leading- [22px] mt-7 md:text-[12px] md:flex md:px-16 md:p-4 md:mt-[5.7rem] md:absolute md:left-[22.9rem] md:z-40'>VIEWPROJECT<span><img src={arrowRight} className='size-2 mt-[0. 35rem] md:size-4 md:mt-0 md:ml-3' alt="" /></span></button>
                    </Link>
                </div>
                <div className='mt-6 mb-5 md:relative'>
                    <img src={image} className='contrast-50 md:ml-24 md:filter-none' alt="" />
                </div>
            </div>
        </section>
        <section className='mt-8 text-justify mb-12 md:mt-20 md:mx-10'>
            <div className='md:flex flex-row-reverse md:items-center md:w-[1170px] md:h-[465px] md:-mx-16'>
                <div className='mt-8 md:ml-8'>
                    <h1 className='text-[#BDBDBD] leading-[64px] text-[32px] font-[300] text-left md:text-[64px] -mt-5 md:-mt-16'>About</h1>
                    <p className='text-[#000000] leading-[25px] text-left md:w-[400px] md:h-[200px] md:mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, adipisci quis. Fuga, eius veritatis ratione facilis aut beatae debitis itaque officia temporibus facere, dolore sequi. Vel perferendis expedita inventore illum ad deserunt est distinctio pariatur, sunt quia natus sequi tempore facere earum voluptatum aut maxime! Eum, nam nostrum iure qui cum aspernatur quasi at eos est laborum velit sunt. Ducimus, quia delectus.</p>
                    <p className='mt-7 mb-5 flex flex-row text-left md:text-[12px]'>READ MORE <span><img src={arrowRight} className='ml-3 md:-mt-1' alt="" /></span></p>
                </div>
                <div className='mb-5 flex space-x-4 > * + * md:space-x-8 > * + *'>
                    <div >
                        <img src={image2} className='w-36 md:w-[270px] md:h-[265px]' alt="" />
                        <img src={image3} className='w-36 mt-4 md:w-[270px] md:h-[140px] md:mt-8' alt="" />
                    </div>
                    <div className='mt-8 mb-5 md:mt-12'>
                        <img src={image4} className='w-36 md:w-[270px] md:h-[345px]' alt="" />
                    </div>
                </div>
            </div>
        </section>
        <section className='mt-8 text-justify mb-12 md:mt-20 md:mx-10'>
            <h1 className='text-[#BDBDBD] leading-[36px] text-[32px] font-[300] text-left md:text-[64px] -mt-5'>Main Focus/Mission Statement</h1>
            <div className='md:flex flex-row md:items-center md:space-x-60 > * + *'>
                <div className='flex text-center mt-4 md:mt-14 md:ml-24'>
                    <h1 className='text-[#f2f2f2] text-[36px] leading-[30px] -ml-2 md:text-[150px] md:mt-9 md:font-[900]'>1</h1>
                    <p className='text-[#333333] mx-2 text-left md:w-[213px] md:h-[144px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sequi saepe ad debitis quod.</p>
                </div>
                <div className='flex text-center mt-4 md:mt-14'>
                    <h1 className='text-[#f2f2f2] text-[36px] leading-[30px] -ml-2 md:text-[150px] md:mt-9 md:font-[900]'>2</h1>
                    <p className='text-[#333333] mx-2 text-left md:w-[330px] md:h-[144px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, possimus. Amet asperiores cumque, soluta velit pariatur ipsa porro nobis distinctio dignissimos labore hic rerum!</p>
                </div>
            </div>
        </section>
        <section className='mt-8 text-justify mb-12 md:mt-20 md:mx-10 md:relative'>
            <h1 className='text-[#BDBDBD] leading-[36px] text-[32px] font-[300] text-left -mt-5 md:text-[64px]'>Our Projects</h1>
            <div className='mt-5 relative md:flex flex-row md:space-x-8 md:mt-14 md:relative md:-ml-8'>
                <div className='absolute text-white top-10 left-[7.3rem] font-[700] z-40 md:w-[233px] md:h-[160px] md:absolute md:left-28 md:top-12 md:text-white'>
                    <h1 className='text-[24px] leading-[24px] md:text-[64px] md:leading-[64px]'>Sample<br />Project</h1>
                    <p className='flex flex-row text-left text-[8px] leading-[12px] mt-1 md:mt-2'>VIEW MORE <span><img src={arrowRight} className='ml-3 -my-1.5' alt="" /></span></p>
                </div>
                <img src={image5} className='mb-5 contrast-50' alt="" />
                <img src={image6} className='md:h-[255px]' alt="" />
            </div>
            <div className='mt-5 md:flex flex-row md:space-x-8 md:mt-3'>
                <img src={image7} className='mb-5 w-[400px]' alt="" />
                <img src={image8} className='mb-5' alt="" />
                <img src={image9} className='mb-5' alt="" />
            </div>
            <Link to='/projects'>
                <button className='flex  px-12 p-4 bg-gray-600 text-white text-[8px] text-center leading-[22px] md:absolute md:-right-10 md:mt-2'>ALL PROJECTS <span><img src={arrowRight} className='ml-3' alt="" /></span></button>
            </Link>
        </section>
        <section className='mt-8 text-justify mb-12 md:mt-20 md:mx-10 md:h-[603px]'>
            <h1 className='text-[#BDBDBD] leading-[36px] text-[32px] font-[300] text-left -mt-5 md:text-[64px] md:mt-36'>Contact Us</h1>
            <div className='mt-5 md:flex flex-row md:space-x-8 md:mt-14'>
                <form className='-ml-1 md:w-[749px] md:h-[369px] md:mt-3' action="">
                    <input className='border-hidden py-1 px-4 bg-[#F3F3F3] mb-1 w-[298px] md:mb-3 md:w-[391px] md:h-[46px]' type="text" placeholder='name' />
                    <input className='border-hidden py-1 px-4 bg-[#F3F3F3] mb-1 w-[298px] md:mb-3 md:w-[391px] md:h-[46px]' type="text" placeholder='Phone Number*' />
                    <input className='border-hidden py-1 px-4 bg-[#F3F3F3] mb-1 w-[298px] md:mb-3 md:w-[391px] md:h-[46px]' type="email" placeholder='Email*' />
                    <input className='border-hidden py-1 px-4 bg-[#F3F3F3] mb-1 w-[298px] md:mb-3 md:w-[391px] md:h-[46px]' type="text" placeholder='Interested In*' />
                    <textarea className='border-hidden py-1 px-4 bg-[#F3F3F3] mb-1 w-[298px] md:mb-3 md:w-[391px] md:h-[147px]' type="textarea" placeholder='Message*' />
                </form>
                <div className='mt-5 mb-5'>
                    <img src={image10} className=' md:w-[749px] md:h-[370px]' alt="" />
                </div>
            </div>
            <button className='flex  px-12 p-4 bg-gray-600 text-white text-[8px] text-center leading-[22px] md:mt-8'>SEND EMAIL <span><img src={arrowRight} className='ml-3' alt="" /></span></button>
        </section>

    </div>
  )
}

export default Home
