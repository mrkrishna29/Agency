import React from 'react'
import assets from '../assets/assets'

const Hero = () => {
  return (
    <div id='hero' className='flex min-h-screen flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white'>
      
      <div className='inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full'>
        <img className='20'src={assets.group_profile} alt="" />
        <p className='text-xs font-medium'>Trusted by 10k+ People</p>
      </div>

      <h1 className='text-4xl  sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-relaxed max-w-5xl'> Turning imagination into <span className='bg-linear-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent'>digtial</span> impact.</h1>

      <p className='sm:text-lg text-lg text-gray-600 dark:text-gray-300 max-w-4/5 pb-3'>Creating meaningful connections and turning big ideas into interactive digital experience.</p>

      <div className='relative'>
        <img src={assets.hero_img} alt="" className='w-full max-w-6x1:'/>
        <img src={assets.bgImage1} alt="" className='absolute -top-40 -right-40 sm:-top-100 sm:-right-70 -z-1 dark:hidden'/>
      </div>



    </div>
  )
} 

export default Hero