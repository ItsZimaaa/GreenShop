import React from 'react'
import ProductsData from "../Data/Data.js"
import { ChevronDown, Handbag } from 'lucide-react'


export default function Category() {
    return (
        <section className='side'>
            {/* Category */}
            <section className='flex justify-between text-[15px] font-medium text-black-100 mt-8'>
                <ul className='flex items-center gap-8'>
                    <li className='cursor-pointer hover:text-green-100 hover:scale-105 ease-in-out duration-200 hover:underline'>All Plants</li>
                    <li className='cursor-pointer hover:text-green-100 hover:scale-105 ease-in-out duration-200 hover:underline'>New Arrivals</li>
                    <li className='cursor-pointer hover:text-green-100 hover:scale-105 ease-in-out duration-200 hover:underline'>Sale</li>
                </ul>

                <div className='flex items-center font-normal'>
                    <h1>Short by:</h1>
                    <h2 className='flex ml-1'>Default sorting <ChevronDown /></h2>
                </div>
            </section>

            {/* Products */}
            <section className='mt-8'>
                <div className="grid grid-cols-4 gap-10 w-full">
                    {ProductsData.map((item) => (
                        <div key={item.id} className="w-62  flex flex-col items-center p-4 bg-white rounded-lg transition-transform duration-300 hover:scale-105">
                            <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-md mb-4 transition-transform duration-500 hover:scale-110" />
                            <h1 className="text-lg font-semibold text-black-100 text-center mb-1">{item.name}</h1>
                            <p className="text-green-600 font-bold text-center text-base">{item.price}</p>
                            <button className='button grayscale-100 hover:grayscale-0'>Add to card<Handbag /></button>
                        </div>
                    ))}
                </div>
            </section>
        </section>
    )
}
