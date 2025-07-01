import React, { useEffect } from 'react'
import { Fade } from 'react-awesome-reveal'

const AboutUs = () => {
  useEffect(()=>{
      document.title="About-Us | TourTide";
    },[])
  
  return (
    <div className="bg-[#f9f9f9] py-10 px-4 md:px-20 min-h-screen">
      {/* dark:bg-[#1d232a] */}
  <h2 className="text-3xl font-bold text-center text-[#00224D] mb-4">About Us</h2>
  <Fade delay={200} duration={1200} triggerOnce cascade>
    <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
    At <span className="text-[#FF204E] font-semibold">ExploreNow</span>, we believe that every journey has a story. 
    We are passionate travel enthusiasts dedicated to making your travel dreams a reality.
    Whether you're craving peaceful nature or thrilling adventures, our expert-curated tour packages ensure unforgettable experiences for all kinds of travelers.
  </p>
  </Fade>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
    <Fade direction='left' delay={200} duration={1500} triggerOnce>
      <div className="bg-white shadow p-6 rounded-xl">
      <h3 className="text-xl font-semibold text-[#00224D]">🌍 Who We Are</h3>
      <p className="text-gray-600 mt-2">
        A team of travel lovers, local experts, and customer-centric minds working together to deliver stress-free travel planning.
      </p>
    </div>
    </Fade>
    <Fade direction='up' delay={200} duration={1500} triggerOnce>
      <div className="bg-white shadow p-6 rounded-xl">
      <h3 className="text-xl font-semibold text-[#00224D]">✈️ What We Do</h3>
      <p className="text-gray-600 mt-2">
        We offer handpicked tour packages, destination guides, and expert support to make every trip smooth, exciting, and budget-friendly.
      </p>
    </div>
    </Fade>
    <Fade direction='right' delay={200} duration={1500} triggerOnce>
      <div className="bg-white shadow p-6 rounded-xl">
      <h3 className="text-xl font-semibold text-[#00224D]">❤️ Why Choose Us</h3>
      <p className="text-gray-600 mt-2">
        24/7 support, verified tour guides, secure booking, and real traveler reviews — we ensure peace of mind in every journey.
      </p>
    </div>
    </Fade>
  </div>
</div>

  )
}

export default AboutUs
