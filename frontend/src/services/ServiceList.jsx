import {Col} from 'reactstrap';
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/weather.png'
import customizationImg from '../assets/images/customization.png'

import ServiceCard from './ServiceCard';
import React from 'react'

const servicesData = [
    {
        imgUrl: weatherImg,
        title: "Calculate weather",
        desc: "Stay well-prepared with real-time weather updates for your upcoming travel destinations and plans."
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "Enhance your journey: Choose the best tour guide for personalized, memorable experiences."
    },
    {
        imgUrl: customizationImg,
        title: "Customization",
        desc: "Tailor your travel experience: Explore customization options for a personalized and unique journey."
    },

]

const ServiceList = () => {
    return (
        <>
        {
            servicesData.map((item,index) => 
            <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
                <ServiceCard item={item} />
            </Col>)
        }
         </>
    )
}

export default ServiceList;