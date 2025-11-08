import React from 'react'
// import Video1  from '../assets/video1.mp4';
import Video2  from '../assets/video2.mp4';
const HeroSection = () => {
  return (
    <div className='flex flex-col items-center mt-6 lg:mt-20'>
      <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide font-bold'>
        项目
        <span className='bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text'>
           缘起 
        </span>
      </h1>
      <p className='mt-10 text-xl text-center text-neutral-500 max-w-4xl'>
        本项目的萌芽，始于项目负责人初中时期跟着家人参与田间劳作的偶然经历——彼时看着祖辈凭经验拉管漫灌，
        明明刚浇过水的菜地，正午太阳一晒又显干裂，而有些地块却因浇水过多烂了根；遇到病虫害时，
        只能靠肉眼辨认、手工除虫，最后收成总因这些“凭感觉”
      </p>
      <div className='flex justify-center my-10'>
        <a href="#" className='bg-gradient-to-r from-blue-400 to-cyan-400 py-3 px-4 mx-3 
        rounded-md'>免费开始
        </a>
        <a href="#" className='py-3 px-4 mx-3 rounded-md border'>
          文档
        </a>
      </div>
      <div className='flex mt-10 justify-center'>
        {/* <video autoPlay loop muted className='rounded-lg w-1/2 border border-cyan-700
        shadow-cyan-400 mx-2 my-4'>
          <source src={Video1} type='video/mp4' />
          Your browser does not support the video tag.
        </video> */}
        <video autoPlay loop muted className='rounded-lg w-2/3 border border-cyan-700
        shadow-cyan-400 mx-2 my-4'>
          <source src={Video2} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}
export default HeroSection;
