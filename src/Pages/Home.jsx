import React from 'react'
import heroImage from "../assets/HeroImage.png"
import { ChevronDown } from 'lucide-react'
import ProductsData from "../Data/Data.js"

export default function Home() {
    return (
        <div className='my-6 side'>
            {/* hero */}
            <section className='flex justify-between items-center bg-milk-100 h-130 p-20 rounded-4xl'>
                <div className='w-140'>
                    <div>
                        <h1 className='uppercase text-[14px] tracking-widest font-medium'>Welcome to GreenShop</h1>
                        <h2 className='text-[70px] font-black text-black-100 leading-18 uppercase'>Let’s Make a Better <span className='text-green-100'>Planet</span></h2>
                        <p className='text-[14px] text-black-90 leading-6 mt-2 font-medium tracking-wide'>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
                    </div>

                    <button className='button mt-4'>Shop now</button>
                </div>


                <div className='relative'>
                    <img src={heroImage} className='w-130' alt="Image" />
                    <img src={heroImage} className='w-33 absolute bottom-9 right-90 ' alt="Image" />
                </div>
            </section>

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
                        <div key={item.id} className="w-62 flex flex-col items-center p-4 bg-white rounded-lg transition-transform duration-300 hover:scale-105">
                            <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-md mb-4 transition-transform duration-500 hover:scale-110" />
                            <h1 className="text-lg font-semibold text-black-100 text-center mb-1">{item.name}</h1>
                            <p className="text-green-600 font-bold text-center text-base">{item.price}</p>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    )
}
