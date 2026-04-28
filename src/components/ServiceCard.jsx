import React from 'react'

const ServiceCard = ({service, index}) => {

    const[position, setPosition] = React.useState({x: 0, y: 0})
    const[isHovered, setIsHovered] = React.useState(false)

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        })
    }

  return (
    <div 
        className={`relative overflow-hidden max-w-lg m-2 hover:pb-1 sm:m-4 rounded-xl shadow-2xl shadow-gray-100 dark:shadow-white/10 border border-gray-200 dark:border-gray-700 ${isHovered ? 'border-blue-500 dark:border-blue-400' : ''} transition-colors duration-300`}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
      
      <div className={`pointer-events-none blur-2xl rounded-full bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 w-75 h-75 absolute z-0 transition-opacity  duration-500 mix-blend-light ${isHovered ? 'opacity-70' : 'opacity-0'}`} style={{top:position.y - 150, left: position.x - 150}} />

        <div className='flex items-center gap-10 p-8 hover:p-7.5 hover:m-0.5 transition-all h-full rounded-xl bg-white dark:bg-gray-900 z-10 relative'>

            <div className='bg-gray-100 dark:bg-gray-700 rounded-full'>
                <img src={service.icon} alt="" className='max-w-24 bgwhite dark:bg-gray-900 rounded-full m-2'/>
            </div>
            <div className='flex1'>
                <h3 className='font-bold'>{service.title}</h3>
                <p className='text-sm mt-2'>{service.description}</p>
            </div>

        </div>
    </div>
  )
}

export default ServiceCard
