
import CarRecommendationPag from '@/components/CarRecommendationPage';
import Hero from '@/components/Hero';

import React from 'react';
import Filter from '@/components/Filter';

import About from '@/components/About';
import Datafetch from '@/components/Datafetch';

const page = () => {
  return (
    <div>
     
      <Hero/>
    

      <Filter/>
      {/* <PopularCarPage/> */}
      <CarRecommendationPag/>
      <About/>
     
     
      
    {/* <Datafetch/> */}
      
     
    </div>
  );
}

export default page;
