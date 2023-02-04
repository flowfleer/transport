import React from 'react'


const Info = ({image,title,des}) => {
  return (
    <>
      <div className='flex justify-center items-center'>
        <div className='flex justify-center items-center flex-col m-7 md:flex-row '>
          <img src={image} alt="error" className='w-3/4 h-auto md:w-1/3'/>
          <div className='md:pl-5 md:flex md:flex-col md:justify-center md:items-center lg:pl-10 lg:justify-start lg:items-start'>
            <p className='font-sans text-3xl my-6 text-primary-dark xl:text-4xl'>{title}</p>
            <p className='font-sans text-sm text-primary text-left md:text-base md:max-w-[520px] lg:text-lg lg:max-w-[650px] xl:text-xl'>
                {des}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Info