import React from 'react'

function Eyes() {
  return (
    <div className='eyes w-full h-screen overflow-hidden'>
        <div className='relative w-full bg-cover bg-center h-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
            <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>
                <div className='w-[15vw] h-[15vw] rounded-full bg-zinc-100'></div>
                <div className='w-[15vw] h-[15vw] rounded-full bg-red-500'></div>
            </div>
        </div>
    </div>
  )
}

export default Eyes