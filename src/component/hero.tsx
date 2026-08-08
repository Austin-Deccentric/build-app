import React from 'react'
import { accentColor } from '@/pages'
import { FaPlay } from "react-icons/fa6";


const Hero = () => {
  return (
    <div className={`md:grid grid-cols-2 gap-4 ${accentColor} w-full h-160 md:h-[50rem]`}>
      <div className="text-white md:px-32">
        <p className="font-bold text-md md:text-4xl"><span className="text-[#F48C06]">Studying</span> Online is now much easier</p>
            <small className="text-xl">TOTC is an interesting platform that will teach you in a more interactive way</small>
        
            <div className="flex items-center gap-4">
                    <button className="btn-ghost-totc">Join for free</button>
                    <div className="flex items-center gap-6">
                       <div className="bg-white rounded-full size-12 flex items-center justify-center">
                        <FaPlay className="  text-[#49BBBD]" />
                       </div>
                    <button className="text-[#252641]"> Watch how it works</button>
                    </div>
                  </div>
      </div>
    </div>
  )
}

export default Hero
