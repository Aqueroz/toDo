import "./estilo.css"

export default function Todo({ todo, apagarTodo, completarTodo, favoritarTodo }){
    return(
        <div className="todo" style={{ 
            backgroundColor: todo.isCompleted ? "#5EFC8D" : todo.favoritado ? "#FFE091" : ""
            }}>
            {/* criar funcao semelhante para favoritar */}
            <div className="conteudo__estilo">
                <p>{todo.texto}</p>
                <p className="categoria__estilo">({todo.categoria})</p>
            </div>
            <div>
                <button className="completar" onClick={() => completarTodo(todo.id)}>Completar</button>
                <button className="favoritar" onClick={() => favoritarTodo(todo.id)}>favoritar</button>
                <button className="apagar" onClick={() => apagarTodo(todo.id)}>X</button>
            </div>
      </div>        
    )
}