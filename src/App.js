import "./app.css"

import { useState } from "react";
import Todo from "./componentes/todo";
import TodoForm from "./componentes/todoForm";
import Busca from "./componentes/busca";
import Filtro from "./componentes/filtro";

function App() {
  
  const [ todos, setTodos ] = useState([])

  const addTodo = ( texto, categoria ) =>{
    const novoTodos = [...todos, {
      // garantir que não haverá duplicação
      id: Math.floor(Math.random() * 10000),
      texto,
      categoria,
      isCompleted: false,
      favoritado: false
    }]
    setTodos(novoTodos)
  }

  const apagarTodo = (id) => {
    const novoTodos = [...todos]
    // operador ternario
    const filtroTodos = novoTodos.filter( (todo) => todo.id !== id ? todo : null )

    setTodos(filtroTodos)
  }

  const completarTodo = (id) => {
    const novoTodos = [...todos]
    novoTodos.map((todo) => todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo)
    setTodos(novoTodos)
  }

  const favoritarTodo = (id) => {
    const novoTodos = [...todos]
    novoTodos.map((todo) => todo.id === id ? (todo.favoritado = !todo.favoritado) : todo)
    setTodos(novoTodos)
  }

  const [ buscar, setBuscar ] = useState("")
  const [ filtro, setFiltro ] = useState("todas")
  const [ ordem, setOrdem ] = useState("asc")

  return (
    <div className="app__estilo">
      <Busca buscar={buscar} setBuscar={setBuscar}/>
      <Filtro filtro={filtro} setFiltro={setFiltro} setOrdem={setOrdem}/>
      <h1>Lista de tarefas</h1>
      <div className="lista__estilo">
        {todos
        // operador ternario cadeado
        .filter((todo) => {
          switch(filtro){
            case "todas":
              return true
            case "completado":
              return todo.isCompleted
            case "favoritado":
              return todo.favoritado
            case "casa":
              return todo.categoria === "casa"
            case "trabalho":
              return todo.categoria === "trabalho"
          
              default:
                return true
          }

        })
        .filter((todo) => 
          // ordem alfabetica
        todo.texto.toLowerCase().includes(buscar.toLowerCase()))
        .sort((a, b) => ordem === "asc" 
        ? a.texto.localeCompare(b.texto) 
        : b.texto.localeCompare(a.texto))
         // pesquisa em tempo real
        .map((todo) => (
          // propriedade todo tem o valor todo (objeto)
          <Todo key={todo.id} todo={todo} apagarTodo={apagarTodo} completarTodo={completarTodo} favoritarTodo={favoritarTodo}/>
        ))}
      </div>

      <TodoForm addTodo={addTodo}/>
    </div>
  );
}

export default App;
