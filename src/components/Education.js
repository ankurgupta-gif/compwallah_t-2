import React from 'react'

const Education = () => {
//   return (
//     <div>Education</div>
//   )
// }
return (
    <div name="about" className='h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white'>
<div  className='max-w-screen-lg mx-auto flex flex-col justify-center
  w-full  h-full'>

    <div className='pb-8'>

        <p className='text-4xl font-bold inline-block-b-4 border-gray-500'>Education</p>
    </div>
    <p className='text-xl mt-20'>
   <div> <b>Bachelor of Technology(2021-25) </b></div>
   <div>Motilal Nehru National Institute of Technology,Allahabad</div>
    </p>
    <p className='text-xl mt-20'>
   <div> <b>Intermediate(2017-19) </b></div>
   <div>G.H.H.S.school,Harpalpur</div>
    </p>
    {/* <p className='text-xl mt-20'>
   <div> <b>Intermedia(2017-19) </b></div>
   <div>G.H.H.S.school,Harpalpur</div>
    </p> */}

    <br/>
    
</div>




    </div>
  )
}


export default Education