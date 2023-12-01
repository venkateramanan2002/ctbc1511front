import React, { useEffect } from 'react'
import { preLoaderAnim } from '../preloader-animation/index.js'
function PreLoader() {
   useEffect(() => {
       preLoaderAnim()
   },[]);
  return (
    <div className='preloader'>
      <div className='text-container'>
        <span className='text-1 ' > C</span>
        <span className=' text-2' >T</span>
        <span className=' text-3 ' >B</span>
        <span className='text-4' >C</span>
        {/*<span className=' text-5' >.</span>
        <span className=' text-6' >.</span>
  <span className='text-7 ' >.</span>*/}
      </div>
    </div>
  )
}

export default PreLoader

