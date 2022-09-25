import React, { useState, useEffect } from 'react';
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import {AddTodos} from "./MyComponents/AddTodos";
import { About } from "./MyComponents/About";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }


  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);
    // Deleting this way in react does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    console.log("deleted", todos)
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo
    // [{
    //   sno: 1,
    //   title: 'Go to the market',
    //   desc: 'You need to go the market',
    // },
    // {
    //   sno: 2,
    //   title: 'Go to the school',
    //   desc: 'You need to go the market',
    // },
    // {
    //   sno: 3,
    //   title: 'Go to the work',
    //   desc: 'You need to go the market',
    // },]
  );

    //save todo todos change than call local storage new todos store
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <BrowserRouter>
        <Header title="My Todos List"/>
        <Routes>
          <Route exact path="/" element={
            <>
              <AddTodos addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          }>
          </Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
