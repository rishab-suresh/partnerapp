import React from 'react'
import { FAQ } from '../Components/HeroComponents/FAQ'
import { Heromain } from '../Components/HeroComponents/Heromain'
import {HowtoBanner} from '../Components/HeroComponents/HowtoBanner'
import { IconInfo } from '../Components/HeroComponents/IconInfo'
import { Partnertoday } from '../Components/HeroComponents/Partnertoday'
import { ServiceInfo } from '../Components/HeroComponents/ServiceInfo'

export const Hero = () => {
  return (
    <>
        <Heromain/>
        <HowtoBanner/>
        <IconInfo/>
        <Partnertoday/>
        <ServiceInfo/>
        <FAQ/>
       
    
    
    </>
  )
}
