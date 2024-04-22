import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../redux/Slices/LikeSlice'
import { useNavigate } from 'react-router-dom';


const Inputs = () => {


    const[input,setInput] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        navigate('/GetVisa')
        setInput('')
    }


  return (
    <div>
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
            <input
            type="text"
            className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Where am I Going?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            />
            <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
                Get Visa
            </button>
        </form>
    </div>
  )
}

export default Inputs