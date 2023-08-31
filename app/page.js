"use client"
import Count from './Count'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { FaDivide } from 'react-icons/fa'
import { RxCross2 } from 'react-icons/rx'
import { useDispatch } from 'react-redux'
import { add, sub, minusByAmount, addByAmount, multiply, divide } from "./redux/slice/countSlice"
import { useState, useRef } from 'react'

export default function Home() {
  const dispatch = useDispatch();
  const [field, setField] = useState(1)
  const inputRef = useRef(null);
  return (
    <>
      <div className='flex flex-col justify-center items-center gap-[2rem] text-3xl font-semibold h-[100vh]'>
        <button onClick={() => { inputRef.current.focus(), dispatch(minusByAmount(parseInt(field))) }} className='bg-[#000] p-2 text-white text-center'>Decrease by Amount</button>
        <div className='flex justify-center items-center gap-[2rem]'>
          <button onClick={() => { inputRef.current.focus(), dispatch(divide(parseInt(field))) }} className='bg-[#000] p-2 flex justify-center items-center space-x-2 text-white text-center'><FaDivide />Divide By Amount</button>
          <button onClick={() => dispatch(sub())} className='bg-[#000] p-2 flex justify-center items-center space-x-2 text-white text-center'><AiOutlineMinus />1</button>
          <Count />
          <button onClick={() => dispatch(add())} className='bg-[#000] p-2 flex justify-center items-center space-x-2 text-white text-center'><AiOutlinePlus />1</button>
          <button onClick={() => { inputRef.current.focus(), dispatch(multiply(parseInt(field))) }} className='bg-[#000] p-2 flex justify-center items-center space-x-2 text-white text-center'><RxCross2 />Multiply by Amount</button>
        </div>

        <button onClick={() => {
          inputRef.current.focus()
          dispatch(addByAmount(parseInt(field)))
        }} className='bg-[#000] p-2 text-white text-center'>Increase by Amount</button>

        <div><input type='number' ref={inputRef} placeholder='Input Amounts For Calculations' onChange={(e) => setField(e.target.value)} className='p-1 placeholder:text-xl outline-none border-2 border-black' /></div>
      </div>

    </>
  )
} 
