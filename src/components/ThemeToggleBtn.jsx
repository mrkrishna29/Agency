import React, { useEffect } from 'react'
import assets from '../assets/assets'

const ThemeToggleBtn = ({theme, setTheme}) => {

    useEffect(()=>{
        if(theme === 'dark'){
            document.documentElement.classList.add('dark')
        }else{
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('theme', theme)
    },[theme]) 

  return (
    <>
      <button>
      {theme ==='dark'? (
        <img onClick={()=>setTheme('light')} src={assets.sun_icon} className='size-8.5 cursor-pointer p-1.5 border rounded-full! border-gray-500' alt="gvg" />
      ) : (
        <img onClick={()=>setTheme('dark')} src= {assets.moon_icon} className='size-8.5 p-1.5 border cursor-pointer rounded-full! border-gray-500 round-full' alt=" bvhvh" />
      )}
      </button>
    </>
  )
}

export default ThemeToggleBtn
