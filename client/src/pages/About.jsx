import React from 'react';
import tiranaimg from '../assets/tirana.jpg';


export default function About() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
        <h1 className='text-3xl font-bold mb-4 text-blue-950 text-center'>About AlbaniHomes</h1>
        <div className='flex flex-col md:flex-row md:max-w-sm: gap-7 items-center justify-center'>
          <p className='mb-2 text-blue-900 font-semibold w-72'>
            Founded in 2000, this is a premier real estate agency in Albania, specializing in properties across the entire country. 
            Our focus areas include Tirana, Durrës, Vlorë, Sarandë, Himarë, Ksamil, Dhërmi, Palasë, Orikum, and the entire Albanian coastline. We collaborate with leading construction companies and banks to facilitate property purchases, offering credit options for both local and international clients.
          </p>
          <img src={tiranaimg} alt="tirana" className='rounded-lg'/>
        </div>    
    </div>
  )
};