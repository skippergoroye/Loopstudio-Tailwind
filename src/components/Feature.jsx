import React from 'react'
import Interactive from '../images/desktop/image-interactive.jpg'

const Feature = () => {
  return (
    <> 
    <section id="feature">
      {/* <!------ Feature Container -------> */}
      <div className="relative container flex flex-col max-w-6xl mx-auto my-32 px-6 text-gray-900 md:flex-row">
         {/* <!----- Image ------> */}
        <img src={Interactive} alt="" />


        {/* <!-----  Text container  -----> */}
        <div className="top-48 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20 md:pb-2">
          <h2 className="max-w-lg mt-10 mb-6 font-sans text-4xl text-center text-gray-900 uppercase md:text-5xl">The leader in interactive VR</h2>
          <p className="max-w-md text-center md:text-left"> Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe.Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
        </div>
      </div>
    </section>
    </>
  )
}

export default Feature