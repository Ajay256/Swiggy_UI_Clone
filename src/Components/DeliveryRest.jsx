import React, { useEffect, useState } from 'react'
import Card from './Card'

export default function DeliveryRest() {
    const [data, setData] = useState([]);
    const [slide, setSlide] = useState(0);
    const fetchTopRestaurant = async() => {
        const response = await fetch('http://localhost:5000/top-restaurant-chains');
        const apiData = await response.json();
        setData(apiData);
    }

    useEffect(() => {
        fetchTopRestaurant();
    }, [])



  return (
    <>
        <div className='max-w-[1200px] mx-auto mb-10'>
            <div className='flex my-3 items-center justify-between'>
                <div className='text-[25px] font-bold'>Restaurants with online food delivery in Lucknow</div>
            </div>
            <div className='flex flex-wrap gap-6 justify-center'>
            {
                data.map((d,i) => {
                    return (
                        <div className='mb-3'
                          key={i}>
                            <Card {...d} key={i} />
                        </div>
                    )
                })
            }
            </div>
        </div>
    </>
  )
}
