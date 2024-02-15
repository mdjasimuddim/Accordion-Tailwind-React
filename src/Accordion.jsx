import React from 'react'
import { SlArrowDown, SlVolume1 } from "react-icons/sl";

const Accordion = () => {
  return (
    <div className='bg-[#e3edf7] mt-[150px] flex justify-center'>
        <div className=''>
            {/* Products  */}
            <div className='relative mb-3 rounded-xl w-[400px] bg-[#e3def7] shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.15), -6px_-6px_10px_-1px_rgba(255, 255, 255, 0.8)]'>
                {/* Input CheckBox  */}
                <input type="checkbox" id='input' className='absolute peer opacity-0' />
                {/* Heading  */}
                <label for="input" className='font-bold tracking-[1px] mx-[20px] h-[50px] flex items-center '>Products</label>
                <SlArrowDown  className='absolute top-[15px] right-[30px] rotate-0 peer-checked:rotate-180'/>
                <div className='max-h-0 overflow-hidden peer-checked:max-h-full'>
                    <p className='p-[20px] text-sm'>
                        Tailwind CSS excels in customization and flexibility due to its utility-first approach, allowing developers to create unique designs effortlessly. Bootstrap offers a more structured and opinionated approach, which might not suit projects requiring extensive customization.
                    </p>
                </div>
            </div>
            {/* Informations  */}
            <div className='relative mb-3 rounded-xl w-[400px] bg-[#e3def7] shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.15), -6px_-6px_10px_-1px_rgba(255, 255, 255, 0.8)]'>
                {/* Input CheckBox  */}
                <input type="checkbox" id='input1' className='absolute peer opacity-0' />
                {/* Heading  */}
                <label for="input1" className='font-bold tracking-[1px] mx-[20px] h-[50px] flex items-center '>Products</label>
                <SlArrowDown  className='absolute top-[15px] right-[30px] rotate-0 peer-checked:rotate-180'/>
                <div className='max-h-0 overflow-hidden peer-checked:max-h-full'>
                    <p className='p-[20px] text-sm'>
                        Tailwind CSS excels in customization and flexibility due to its utility-first approach, allowing developers to create unique designs effortlessly. Bootstrap offers a more structured and opinionated approach, which might not suit projects requiring extensive customization.
                    </p>
                </div>
            </div>
            {/* Questions  */}
            <div className='relative mb-3 rounded-xl w-[400px] bg-[#e3def7] shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.15), -6px_-6px_10px_-1px_rgba(255, 255, 255, 0.8)]'>
                {/* Input CheckBox  */}
                <input type="checkbox" id='input2' className='absolute peer opacity-0' />
                {/* Heading  */}
                <label for="input2" className='font-bold tracking-[1px] mx-[20px] h-[50px] flex items-center '>Products</label>
                <SlArrowDown  className='absolute top-[15px] right-[30px] rotate-0 peer-checked:rotate-180'/>
                <div className='max-h-0 overflow-hidden peer-checked:max-h-full'>
                    <p className='p-[20px] text-sm'>
                        Tailwind CSS excels in customization and flexibility due to its utility-first approach, allowing developers to create unique designs effortlessly. Bootstrap offers a more structured and opinionated approach, which might not suit projects requiring extensive customization.
                    </p>
                </div>
            </div>
            {/* Guides  */}
            <div className='relative mb-3 rounded-xl w-[400px] bg-[#e3def7] shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.15), -6px_-6px_10px_-1px_rgba(255, 255, 255, 0.8)]'>
                {/* Input CheckBox  */}
                <input type="checkbox" id='input3' className='absolute peer opacity-0' />
                {/* Heading  */}
                <label for="input3" className='font-bold tracking-[1px] mx-[20px] h-[50px] flex items-center '>Products</label>
                <SlArrowDown  className='absolute top-[15px] right-[30px] rotate-0 peer-checked:rotate-180'/>
                <div className='max-h-0 overflow-hidden peer-checked:max-h-full'>
                    <p className='p-[20px] text-sm'>
                        Tailwind CSS excels in customization and flexibility due to its utility-first approach, allowing developers to create unique designs effortlessly. Bootstrap offers a more structured and opinionated approach, which might not suit projects requiring extensive customization.
                    </p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Accordion