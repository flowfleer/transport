import React from 'react'

const Footer = () => {
  return (
    <>
        <div id="footer" className='flex justify-center items-center'>
            <hr className='border-2 w-4/5'/>
        </div>
        <div className='text-center mt-7 text-sans text-sm md:text-base lg:text-lg xl:text-xl'>
            <p className='text-4xl xl:text-5xl text-primary mb-5'>CONTACT US</p>
        <p className='flex justify-center text-primary'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height='1.2rem' width='1.2rem' className='m-[1px]'><path fill="#23D997" d="M18,4.48a8.45,8.45,0,0,0-12,12l5.27,5.28a1,1,0,0,0,1.42,0L18,16.43A8.45,8.45,0,0,0,18,4.48ZM16.57,15,12,19.59,7.43,15a6.46,6.46,0,1,1,9.14,0ZM9,7.41a4.32,4.32,0,0,0,0,6.1,4.31,4.31,0,0,0,7.36-3,4.24,4.24,0,0,0-1.26-3.05A4.3,4.3,0,0,0,9,7.41Zm4.69,4.68a2.33,2.33,0,1,1,.67-1.63A2.33,2.33,0,0,1,13.64,12.09Z"/></svg>: Nairutya, Zanzarda Chowkdi, Junagadh 362001</p>
            <p className='flex justify-center text-sans text-primary'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height='1.2rem' width='1.2rem' className='m-[1px]'><path fill="#23D997" d="M19.44,13c-.22,0-.45-.07-.67-.12a9.44,9.44,0,0,1-1.31-.39,2,2,0,0,0-2.48,1l-.22.45a12.18,12.18,0,0,1-2.66-2,12.18,12.18,0,0,1-2-2.66L10.52,9a2,2,0,0,0,1-2.48,10.33,10.33,0,0,1-.39-1.31c-.05-.22-.09-.45-.12-.68a3,3,0,0,0-3-2.49h-3a3,3,0,0,0-3,3.41A19,19,0,0,0,18.53,21.91l.38,0a3,3,0,0,0,2-.76,3,3,0,0,0,1-2.25v-3A3,3,0,0,0,19.44,13Zm.5,6a1,1,0,0,1-.34.75,1.05,1.05,0,0,1-.82.25A17,17,0,0,1,4.07,5.22a1.09,1.09,0,0,1,.25-.82,1,1,0,0,1,.75-.34h3a1,1,0,0,1,1,.79q.06.41.15.81a11.12,11.12,0,0,0,.46,1.55l-1.4.65a1,1,0,0,0-.49,1.33,14.49,14.49,0,0,0,7,7,1,1,0,0,0,.76,0,1,1,0,0,0,.57-.52l.62-1.4a13.69,13.69,0,0,0,1.58.46q.4.09.81.15a1,1,0,0,1,.79,1Z"/></svg>: +91 9429426499 , +91 8141404666</p>
        <p className='flex justify-center text-sans mb-5 text-primary'><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" height='1.2rem' width='1.2rem' className='m-[1px]'><path fill="#23D997" d="M14,11.51h2.42a1,1,0,0,0,.71-.29l4.58-4.58a1,1,0,0,0,0-1.42L19.29,2.8a1,1,0,0,0-1.42,0L13.29,7.38a1.05,1.05,0,0,0-.29.71v2.42A1,1,0,0,0,14,11.51Zm1-3,3.58-3.58,1,1L16,9.51H15Zm6,2a1,1,0,0,0-1,1v7a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8.9l5.88,5.89a3,3,0,0,0,4.27,0,1,1,0,0,0,0-1.4,1,1,0,0,0-1.43,0,1,1,0,0,1-1.4,0L5.41,7.49H10a1,1,0,0,0,0-2H5a3,3,0,0,0-3,3v10a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3v-7A1,1,0,0,0,21,10.49Z"/></svg>: aksharinternational34@gmail.com</p>
        </div>
        {/* bg-neutral-200 p-6 text-center dark:bg-neutral-700  */}
        <div className="bg-primary text-center p-5"> 
            <span className='text-black'>© 2023 Copyright : </span>
            <a className="font-semibold text-black">Akshar International</a>
        </div>
        {/* font-semibold text-neutral-800 dark:text-neutral-400 */}
    </>
  )
}

export default Footer