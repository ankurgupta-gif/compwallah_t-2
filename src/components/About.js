import React from 'react'

const About = () => {
  return (
    <div name="about" className='h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white'>
<div  className='max-w-screen-lg mx-auto flex flex-col justify-center
  w-full  h-full'>

    <div className='pb-8'>

        <p className='text-4xl font-bold inline-block-b-4 border-gray-500'>About</p>
    </div>
    <p className='text-xl mt-20'>
    Passionate about design, creativity, and web development, I specialize in 
    creating visually 
    appealing and user-friendly experiences. With a keen eye for detail, I 
    strive to bring ideas to life through innovative and captivating designs. Simultaneously, I am an aspiring web developer,machine learning enginner.
    and  I have good knowledge of Data Structures and algorithms.
    </p>
    <br/>
    {/* <p className='text-xl'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Asperiores expedita accusantium temporibus dolor tenetur 
        odit commodi eaque architecto ad corrupti error sit fugiat 
        tempore, harum corporis, animi, maxime ullam ut!
    </p> */}
</div>




    </div>
  )
}

export default About