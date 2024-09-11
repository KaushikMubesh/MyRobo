import React from 'react'
import Image1 from "./assets/image1.png"

export const Hari = () => {
  return (
    <div className='bg-green-600 w-screen h-screen flex justify-center items-center'>
            <div className='bg-white w-[900px] h-[500px] rounded-lg shadow-2xl'>
                <p className='harifon text-[40px] ml-[120px] mt-0 rounded-lg font-extrabold text-green-500 p-2'>BREATHING    <span className=' ml-3 text-orange-500 text-[30px]'>Robot</span></p>
                <div className='flex justify-between'>
                <div>
                    <ul className='flex flex-col gap-4  mt-[50px] ml-[90px] font-extrabold text-[23px] text-black/55' style={{}}>
                        <div className='flex gap-9'>
                        <li className='harifon'>CO2 :</li>
                        <div className=' text-orange-600 text-[25px]'>21.9%</div>
                        </div> 
                        <div className='flex gap-9'>
                        <li className='ml-[10px] harifon'>O2  :</li>
                        <div className=' text-green-600  text-[20px]'>78%</div>
                        </div>
                        <div className='flex gap-9'>
                        <li  className='harifon'>CH4 :</li>
                        <div className=' text-green-600  text-[20px]'>0.01%</div>
                        </div>
                        <div className='flex gap-9'>
                        <li className='harifon ml-[21px]'>N :</li>
                        <div className=' text-orange-600  text-[25px]'>0.1%</div>
                        </div>
                    </ul> 
                </div>
                <img src={Image1} className='w-[350px] mt-0 mr-[100px] mb-3' alt="" />
                </div>
                <div className='mt-0 text-center text-green-800/55'>
                The above UI displays the concentration of hazardous gases in the atmosphere
                </div>

            </div>
            <style>
 
            </style>
    </div>
  )
}
