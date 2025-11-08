import React from 'react'
import  {features}  from "../constants/index.jsx";
const FeatureSection =() =>{
  return (
    <div className='relative mt-20 border-b border-neutral-200 min-h-[400px]'>
        <div className='text-center'>
            <span className='bg-neutral-100 text-blue-400 rounded-full h-6
            text-sm font-medium px-2 py-1 uppercase'>
                优势
            </span>
            <h2 className='text-4xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide font-bold'>
                我们的
                <span className='bg-gradient-to-r from-blue-400 to-cyan-500
                text-transparent bg-clip-text'>优势</span>
            </h2>
        </div>
        <div className='flex flex-wrap mt-10 lg:mt-20'>
            {features.map((feature, index)=>(
                <div key={index} className='w-full sm:1/2 lg:w-1/3'>
                    <div className='flex mx-6 h-10 w-10 p-2 bg-neutral-100
                    text-blue-500 justify-center items-center rounded-full'>
                        {feature.icon}
                    </div>
                    <div>
                        <h5 className='mt-1 mb-6 text-2xl'>
                            {feature.text}
                        </h5>
                        <p className='text-md p-2 mb-20 text-neutral-500 text-xl'>
                            {feature.description}
                        </p>
                    </div>
                </div>
                
            ))}
        </div>
    </div>
  )
}

export default FeatureSection