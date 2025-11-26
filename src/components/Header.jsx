import React, { useRef } from 'react'
import Background from '../assets/gradientBackground.png'
import Star from '../assets/star.png'
import { useAppContext } from '../../context/AppContext'

function Header(){

    const {setInput, input} = useAppContext()
    const inputRef = useRef()

    const onSubmitHandler = async (e) =>{
        e.preventDefault();
        setInput(inputRef.current.value)
    }

    const onClear = () =>{
        setInput('')
        inputRef.current.value = ''
    }

 
    return(
        <div className='mx-8 sm:mx-16 xl:mx-24 relative'>
            <div className='text-center mt-20 mb-8'>
                
                <h1 className='text-3xl sm:text-5xl font-semibold sm:leading-16 text-stone-700'>Your own <span className='text-red-900'>blogging </span> <br/> platform</h1>
                <p className='my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs text-gray-500'>This is your space to think out loud, to share what matters, and to write without filters. Whether it's one word or a thousand, your story starts right here. </p>
            </div>
            <img src={Background} alt="" className='absolute -top-50 -z-1 opacity-50'/>
            <form onSubmit={onSubmitHandler} className='flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-300 bg-white rounded overflow-hidden'>
                <input ref={inputRef} type="text" placeholder='Search for blogs' required className='w-full pl-4 outline-none'/>
                <button type="submit" className='bg-black text-white px-8 py-2 m-1.5 rounded hover:scale-105 transaction-all cursor-pointer'>Search</button>
            </form>
            <div  className='text-center'>
                {input && <button onClick={onClear} className='border font-light text-xs py-1 px-3 my-7 rounded-sm shadow-custom-sm cursor-pointer'>Clear Search</button>}
            </div>
        </div>
        
    )
}
export default Header