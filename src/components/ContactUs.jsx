import React, { useState } from 'react'
import Title from './Title'
import assets from '../assets/assets'
import toast from 'react-hot-toast';
import {motion} from "motion/react"

const ContactUs = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "15612645-71c7-4ab7-a8b3-c7cdb0ac877b");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Message sent successfully!");
      event.target.reset();
    } else {
      toast.error(data.message)
    }
    } catch (error) {
      toast.error(error.message)
    }
  }


  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{once: true}}
      transition={{staggerChildren:0.2}}
      id='contact-us' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
      <Title title='Reach out to us' desc='from strategy to execution, we craft digital solutions that move your business forward.'/>

      <motion.form 
      initial={{opacity:0, y: 30}}
      whileInView={{opacity: 1, y:0}}
      transition={{duration: 0.5, delay: 0.4 }}
      viewport={{once: true}}
      onSubmit={onSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>
        
        <div>
          <p className='mb-2 text-sm font-medium'>Your Name</p>
          <div className='flex pl-3 rounded-leg border border-gray-300 dark:border-gray-600'>
            <img src={assets.person_icon} alt=""/>
        <input name="name" type="text" placeholder='Enter your name' className='w-full p-3 text-sm outline-none' required/>
          </div>
        </div>

        <div>
          <p className='mb-2 text-sm font-medium'>Email id</p>
          <div className='flex pl-3 rounded-leg border border-gray-300 dark:border-gray-600'>
            <img src={assets.email_icon} alt=""/>
        <input name="email" type="email" placeholder='Enter your email' className='w-full p-3 text-sm outline-none' required/>
          </div>
        </div>

        <div className='sm:col-span-2'>
          <p className='mb-2 text-sm font-medium'>Message</p>
          <textarea name="message" rows={8} placeholder='Enter your message' className='w-full p-3 text-sm outline-none border border-gray-300 dark:border-gray-600' required/>
        </div>

        <button type='submit' className=' w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-lg self-end cursor-pointer hover:scale-103 transition-all'>
          Submit <img src={assets.arrow_icon} alt="" className='w-4'/>
        </button>

        <div className="sm:col-span-2 text-center">
          {result && <p className="text-sm font-medium">{result}</p>}
        </div>
      </motion.form>
    </motion.div>
  )
}

export default ContactUs
