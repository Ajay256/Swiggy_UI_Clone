import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import Card from './Card';

export default function TopRest() {
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

    const prevSlide = () =>{
        if(slide == 0) return false;
        setSlide(slide-2)
      }
    console.log(data.length);
    console.log(slide);
      const nextSlide = () => {
        if(data.length-4 == slide) return false;
        setSlide(slide+2)
      }

  return (
    <>
    <div className='max-w-[1200px] mx-auto'>
        <div className='flex my-3 items-center justify-between'>
            <div className='text-[25px] font-bold'>Top restaurant chains in Jodhpur</div>
            <div className='flex'>
                <div className='flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'onClick={prevSlide}><FaArrowLeft/></div>
                <div className='flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'onClick={nextSlide}><FaArrowRight/></div>
            </div>
        </div>
        <div className='flex gap-5 overflow-hidden'>
            {
                data.map((d,i) => {
                    return (
                        <div style={{
                            transform:`translateX(-${slide*100}%)`}} key={i}>
                            <Card {...d} key={i} />
                        </div>
                    )
                })
            }
            
        </div>
        <hr className='my-6 border-[1px]' />
    </div> 
    </>
  )
}
