import React from 'react'
import Logo from '../images/logo.svg'
import FaceBook from '../images/icon-facebook.svg'
import Twitter from '../images/icon-twitter.svg'
import Pinterest from '../images/icon-pinterest.svg'
import Instagram from '../images/icon-instagram.svg'

const Footer = () => {
  return (
    <>
     <footer className="bg-black">
      <div className="container max-w-6xl py-10 mx-auto">   
        <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-center">
          {/* <!---------   Menu & Logo Container  ---------> */}
          <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
            <div className="h-8">   
              <img src={Logo} alt="" className="w-44 md:ml-3" />
            </div>

            <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">   

              <div className="h-10 group">  
                <a href="#">About</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-500">
                </div>
              </div>


              <div className="h-10 group"> 
                <a href="#">Careers</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-500">
                </div>
              </div>



              <div className="h-10 group">  
                <a href="#">Events</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-500">
                </div>
              </div>



              <div className="h-10 group">  
                <a href="#">Products</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-500">
                </div>
              </div>



              <div className="h-10 group">  
                <a href="#">Support</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-500">
                </div>
              </div>

            </div>
          </div>



          {/* <!----------    Social & Copy container  ------------> */}
          <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
            <div className="flex items-center justify-center mx-auto space-x-4 md:justify-end md:x-0">
              {/* <!------  Icon 1 -----> */}
              <div className="h-8 group">
                <a href="">
                  <img src={FaceBook} alt="" />
                </a>
              </div>


              {/* <!------  Icon 2 -----> */}
              <div className="h-8 group">
                <a href="">
                  <img src={Twitter} alt="" />
                </a>
              </div>



              {/* <!------  Icon 3 -----> */}
              <div className="h-8 group">
                <a href="">
                  <img src={Pinterest} alt="" />
                </a>
              </div>



              {/* <!------  Icon 4 -----> */}
              <div className="h-8 group">
                <a href="">
                  <img src={Instagram} alt="" />
                </a>
              </div>
            </div>



              {/* <!-------  Copy --------> */}
              <div className="font-bold">
                &copy; 2022 Loopstudios. All Rights Reserverd
              </div>

            
          </div>
        </div>  
      </div>
    </footer>
    </>
  )
}

export default Footer