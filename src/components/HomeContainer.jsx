import React from 'react'
import Delivery from '../img/delivery.png'
import HeroBg from '../img/heroBg.png'
import { heroData } from '../utils/data'


const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id = "home">

      <div className="py-2  flex-1 flex flex-col items-start justify-center gap-6">
        <div className=" flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold" >
            Bike Delivery
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img src={Delivery} alt="bike" className=" w-full h-full object-contain" />
          </div>
        </div>


        <p className='text-[2.5rem] lg:text-[4rem] font-bold tracking-wide text-headingColor'>The Fatest Delivery in
          <span className="text-orange-600 text-[3rem] lg:text-[4.25rem]">Your City</span>

        </p>

        <p className='text-base text-textColor text-center md:text-left md:w-[80%] '>
          Order food online from restaurants and get it delivered. Serving in Bangalore, Hyderabad, Delhi, Gurgaon, Nagpur, Jaipur, Coimbatore, Chandigarh, Ahemdabad.
          Absolutely free delivery.
        </p>

        <button type="button" className='bg-gradient-to-br from-orange-400 to-orange-600 w-full px-4 py-2
        rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 md:w-auto'> Order Now</button>

      </div>
      <div className="py-2  flex-1 flex items-center relative">
              <img src={HeroBg} alt="hero" className="ml-auto w-full lg:w-auto h-420 lg:h-650 " />
              
              <div className="w-full h-full gap-4 drop-shadow-lg flex flex-wrap md:top-10 lg:top-0 lg:-left-20 absolute items-center justify-center md:px-0 p-2 lg:p-4">
          {heroData && heroData.map(n => (
                    <div key = {n.id} className=' lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-between'>
                      <img src={n.imageSrc} className=" w-20 -mt-10 lg:w-40 lg:-mt-20" alt="icecream" />
                      <p className="text-base font-semibold text-textColor mt-2 lg:mt-4">{n.name}</p>
                      <p className="text-[12px] lg:text-sm font-semibold text-lighttextGray my-1 lg:my-3">{n.decp}</p>
                      <p className='text-sm font-semibold text-headingColor'>
                          <span className='text-xs text-red-600'>₹ </span>{n.price}</p>
                  </div>
                  ))}
              </div>
      </div>

    </section>
  )
}

export default HomeContainer