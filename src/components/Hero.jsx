import React, { useState, useEffect } from 'react'
import Logo from '../images/logo.svg'
import { close, logo, menu } from "../assets";



const Hero = () => {
  const [toggle, setToggle] = useState(false);

  
  return (
    <>
       <section id="hero">
          <div className='container max-w-6xl mx-auto px-6 py-12'>
            <nav className='flex items-center justify-between font-bold text-white'>
              {/* Logo  */}
             <img src={Logo} alt=""  />
                  {/* Menu  */}
              <div className='hidden h-10 font-alata md:flex md:space-x-8'>
                <div className='group'>
                  <a href="#">About</a>
                  <div className='mx-2 group-hover:border-b group-hover:border-blue-50'>
                  </div>
                </div>

                <div className='group'>
                  <a href="#">Careers</a>
                  <div className='mx-2 group-hover:border-b group-hover:border-blue-50'>
                  </div>
                </div>

                <div className='group'>
                  <a href="#">Events</a>
                  <div className='mx-2 group-hover:border-b group-hover:border-blue-50'>
                  </div>
                </div>

                <div className='group'>
                  <a href="#">Products</a>
                  <div className='mx-2 group-hover:border-b group-hover:border-blue-50'>
                  </div>
                </div>

                <div className='group'>
                  <a href="#">Support</a>
                  <div className='mx-2 group-hover:border-b group-hover:border-blue-50'>
                  </div>
                </div>
              </div>


              {/* mobile toggle button here */}
              <div className="ss:hidden flex flex-1 justify-end items-center">
                <img
                  src={toggle ? close : menu}
                  alt="menu"
                  className="w-[28px] h-[28px] object-contain"
                  onClick={() => setToggle((prev) => !prev)}
                />


                {/* mobile toggle content  */}
                  <div id="menu" className={`${
                      toggle ? "flex" : "hidden"
                    } mt-20 absolute top-0 bottom-0 flex-col left-0 self-end  w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black`}>
                    <a href="#" className="hover:text-pink-500">About</a>
                    <a href="#" className="hover:text-pink-500">Careers</a>
                    <a href="#" className="hover:text-pink-500">Events</a>
                    <a href="#" className="hover:text-pink-500">Products</a>
                    <a href="#" className="hover:text-pink-500">Support</a>
                  </div>
              </div>


              
          
            </nav>

             {/* @todo Hambuger Button  */}

             <div className='max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl'>
              Impressive Experiences That Deliver
             </div>
          </div>
       </section>
    </>
  )
}

export default Hero