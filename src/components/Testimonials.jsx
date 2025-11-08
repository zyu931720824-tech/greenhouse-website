import React from 'react'
import {testimonials} from "../constants"
function Testimonials() {
  return (
    <div className='mt-20 tracking-wide'>
        <h2 className='text-4xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20 font-bold'>
            四省六调
        </h2>
        <div className='flex flex-wrap justify-center'>
            {testimonials.map((testimonial, index) => (
                <div key={index} className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2'>
                    <div className='bg-neutral rounded-md p-6 text-md border
                    border-neutral-200 font-thin'>
                        
                        <div className='flex mt-2 items-start'>
                            <img className='w-22 h-22 mr-6 mb-2 border border-neutral-300' src={testimonial.image} alt={testimonial.user} />
                            
                        </div>
                        <div>
                                <h5 className='text-lg'>{testimonial.user}</h5>
                                <span className='text-medium font-normal italic text-neutral-600'>{testimonial.company}</span>
                                <p className='text-lg'>{testimonial.text}</p>
                                
                            </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonials