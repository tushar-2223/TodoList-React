import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {

  let myStyle = {
    minHeight: "100vh",
    margin: "40px auto"
  }


  return (
    <div className="container my-3" style={myStyle}>
      <h3 className='text-center my-3'><u>Todos List</u></h3>

      {/* advance js map function also this is use in API*/}

      {/* ternary operator */}
      {props.todos.length === 0 ? <h4 className='text-center'>-- No Todos to display --</h4> :
        props.todos.map((todo) => {
          return (
            <>
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
              <hr />
            </>
          )
        })}

    </div>
  )
}
