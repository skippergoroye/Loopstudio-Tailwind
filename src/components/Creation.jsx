import React from 'react'
import DeepDesktop from '../images/desktop/image-deep-earth.jpg'
import DeepMobile from '../images/mobile/image-deep-earth.jpg'
import NightDesktop from '../images/desktop/image-night-arcade.jpg'
import NightMobile from '../images/mobile/image-night-arcade.jpg'
import SoccerDesktop from '../images/desktop/image-night-arcade.jpg'
import SoccerMobile from '../images/mobile/image-night-arcade.jpg'
import GridDesktop from '../images/desktop/image-grid.jpg'
import GridMobile from '../images/mobile/image-grid.jpg'
import AboveDesktop from '../images/desktop/image-grid.jpg'
import AboveMobile from '../images/mobile/image-grid.jpg'
import FisheyeDesktop from '../images/desktop/image-fisheye.jpg'
import FisheyeMobile from '../images/mobile/image-fisheye.jpg'
import PocketDesktop from '../images/desktop/image-pocket-borealis.jpg'
import PoccketMobile from '../images/mobile/image-pocket-borealis.jpg'
import CuriosityDesktop from '../images/desktop/image-pocket-borealis.jpg'
import CuriosityMobile from '../images/mobile/image-pocket-borealis.jpg'


const Creation = () => {
  return (
    <>
      <section id="creations">
        <div class="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">   
          <div class="flex justify-center mb-20 md:justify-between">  
            <h2 class="text-4xl text-center uppercase md:text-left md:text-5xl">Our Creation</h2>
            <button class="hidden btn md:block">See All</button>
          </div>

        
        <div class="item-container">   
          <div class="group item">   
            <img src={DeepDesktop} alt="" class="hidden w-full duration-200 md:block group-hover:scale-110" />  

            <img src={DeepMobile} alt="" class="w-full" /> 

            <div class="item-gradient"></div> 
            <h5>Deep Earth</h5>  
          </div>


          <div class="group item">   
            <img src={NightDesktop} alt="" class="hidden w-full duration-200 md:block group-hover:scale-110" />  

            <img src={NightMobile} alt="" class="w-full" /> 

            <div class="item-gradient"></div> 
            <h5>Night-ac</h5>  
          </div>

          <div class="group item">   
            <img src={SoccerDesktop} alt="" class="hidden w-full duration-200 md:block group-hover:scale-110" />   

            <img src={SoccerMobile} alt="" class="w-full" /> 

            <div class="item-gradient"></div> 
            <h5>Socker TEAM VR</h5>  
          </div>



          <div class="group item">   
            <img src={GridDesktop} alt="" class="hidden w-full duration-200 md:block group-hover:scale-110" />   

            <img src={GridMobile} alt="" class="w-full" />

            <div class="item-gradient"></div> 
            <h5>The GRID</h5>  
          </div>
        </div>


        
        <div class="item-container mt-10">   
          <div class="group item">   
            <img src={AboveDesktop} alt="" class="hidden w-full duration-200 md:block group-hover:scale-110" />   

            <img src={AboveMobile} alt="" class="w-full" /> 

            <div class="item-gradient"></div> 
            <h5>From UP Abov VR</h5>  
          </div>


          <div class="group item">   
            <img src={PocketDesktop} alt="" class="hidden w-full duration-200 md:block group-hover:scale-110" /> 

            <img src={PoccketMobile} alt="" class="w-full" /> 

            <div class="item-gradient"></div> 
            <h5>POCKET BOREALIS</h5>  
          </div>

          <div class="group item">   
            <img src={CuriosityDesktop} alt="" class="hidden w-full duration-200 md:block group-hover:scale-110" />  

            <img src={CuriosityMobile} alt="" class="w-full" /> 

            <div class="item-gradient"></div> 
            <h5>THE CURIOSITY</h5>  
          </div>



          <div class="group item">   
            <img src={FisheyeDesktop} alt="" class="hidden w-full duration-200 md:block group-hover:scale-110" />   

            <img src={FisheyeMobile} alt="" class="w-full" /> 

            <div class="item-gradient"></div> 
            <h5>MAKE IT FISHEYE</h5>  
          </div>
        </div>


        {/* <!---------  Bottom Button container   ---------> */}
        <div class="flex justify-center mt-10 md:hidden">
           <button class="btn w-full md:hidden">See All</button>
        </div>
      </div>
    </section>
    </>
  )
}

export default Creation