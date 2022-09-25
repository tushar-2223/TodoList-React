import React  from 'react'

export const TodoItem = ({todo,onDelete}) => {
  return (
    <>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className='bnt btn-sm btn-danger' onClick={() => { onDelete(todo) }}>Delete</button>
      {/* function pass not function call onDelete*/}
    </>
    
  )
}
