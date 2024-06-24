import React from 'react'
import S3image1 from '../../assets/images/S3image1.jpg'
import S3image2 from '../../assets/images/S3image2.jpg'
import S3image3 from '../../assets/images/S3image3.jpg'
import arrowLeft from '../../assets/images/arrow-2-left-long.svg'
import arrowRight from '../../assets/images/arrow-2-right-long.svg'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Projects = () => {
  return (
    <div className='m-0 p-0 font-[Roboto]'>
        <section className='m-4 -mt-24 text-justify mb-12 sm:mx-10 sm:mt-20'>
            <h1 className='text-[#BDBDBD] text-[32px] -my-3 sm:text-[64px] sm:leading-[44px]'>Our</h1>
            <h1 className='font-bold text-[#333333] text-[32px] sm:text-[64px]'>Projects</h1>
            <div className='md:flex md:flex-col lg:flex-row lg:items-center'>
                <div className='mt-5'>
                    <img src={S3image1} className='md:w-[670px] md:h-[435px]' alt="" />
                </div>
                <div className='md:w-[500px] md:h-[435px] md:ml-7 md:mt-6'>
                    <h3 className='text-[#BDBDBD] font-[300] text-[20px] leading-[46px] md:text-[40px] md:mt-8'>Sample Project</h3>
                    <p className='text-[#000000] leading-[25px] text-justify text-[16px] md:mt-20 md:text-[20px] lg:text-[17px] md:w-[550px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repellendus fugiat architecto ut! Cum veritatis magni dolor recusandae accusantium laboriosam, fuga, omnis labore tempora suscipit illo ratione assumenda earum voluptate. Sit dicta voluptas alias perspiciatis reprehenderit culpa impedit corrupti atque temporibus quia.</p>
                    <p className='mt-7 mb-5 flex flex-row text-left text-[12px] leading-[12px] md:mt-20'>VIEW MORE <span><img src={arrowRight} className='ml-3 -my-1.5' alt="" /></span></p>
                </div>
            </div>
        </section>
        <section className='mt-8 text-justify mb-12 sm:mx-10 md:ml-7'>
            <div className='md:flex md:flex-col lg:flex-row lg:items-center'>
                <div>
                    <img src={S3image2} className='md:w-[670px] md:h-[435px]' alt="" />
                </div>
                <div className='md:w-[500px] md:h-[435px] md:ml-7 md:mt-6'>
                    <h3 className='text-[#BDBDBD] font-[300] text-[20px] leading-[46px] md:text-[40px] md:mt-8'>Sample Project 2</h3>
                    <p className='text-[#000000] leading-[25px] text-justify text-[16px] md:mt-20 md:text-[20px] lg:text-[17px] md:w-[550px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repellendus fugiat architecto ut! Cum veritatis magni dolor recusandae accusantium laboriosam, fuga, omnis labore tempora suscipit illo ratione assumenda earum voluptate. Sit dicta voluptas alias perspiciatis reprehenderit culpa impedit corrupti atque temporibus quia.</p>
                    <p className='mt-7 mb-5 flex flex-row text-left text-[12px] leading-[12px] md:mt-20'>VIEW MORE <span><img src={arrowRight} className='ml-3 -my-1.5' alt="" /></span></p>
                </div>
            </div>
        </section>
        <section className='mt-8 text-justify mb-12 sm:mx-10 md:ml-7'>
            <div className='md:flex md:flex-col lg:flex-row lg:items-center'>
                <div>
                    <img src={S3image3} className='md:w-[670px] md:h-[435px]' alt="" />
                </div>
                <div className='md:w-[500px] md:h-[435px] md:ml-7 md:mt-6'>
                    <h3 className='text-[#BDBDBD] font-[300] text-[20px] leading-[46px] md:text-[40px] md:mt-8'>Sample Project 3</h3>
                    <p className='text-[#000000] leading-[25px] text-justify text-[16px] md:mt-20 md:text-[20px] lg:text-[17px] md:w-[550px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repellendus fugiat architecto ut! Cum veritatis magni dolor recusandae accusantium laboriosam, fuga, omnis labore tempora suscipit illo ratione assumenda earum voluptate. Sit dicta voluptas alias perspiciatis reprehenderit culpa impedit corrupti atque temporibus quia.</p>
                    <p className='mt-7 mb-5 flex flex-row text-left text-[12px] leading-[12px] md:mt-20'>VIEW MORE <span><img src={arrowRight} className='ml-3 -my-1.5' alt="" /></span></p>
                </div>
            </div>
            <div>
                <span className='flex ms-36 mt-8'>
                    <img src={arrowLeft} alt="" />
                    <img src={arrowRight} className='ms-12' alt="" />
                </span>
                <p className=' text-[#333333] -mt-6 md:text-[24px]'>0</p>
                <p className='-mt-2 text-[#333333] md:text-[24px]'>1</p>
                <p className='ms-20 -mt-10 text-[#BDBDBD] md:text-[24px] md:-mt-16'>05</p>
            </div>
        </section>
        
    </div>
  )
}

export default Projects
