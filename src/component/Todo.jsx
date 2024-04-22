import React from 'react'
import { useSelector} from 'react-redux'

function Todos() {
    const todos = useSelector(state => state.todos)

  return (
    <>
    <div>Todos</div>
    <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className='text-white'>{todo.text}</div>
            
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos