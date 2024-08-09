import { useState } from "react"
import "./estilo.css"

export default function TodoForm({ addTodo }){

    const [ value, setValue ] = useState("")

    const [ categoria, setCategoria ] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()

        if(!value || !categoria) return
        addTodo(value, categoria)
        setValue("")
        setCategoria("")
    }

    return(
        <div className="todo__form__estilo">
            <form onSubmit={handleSubmit}>
              <h2>Criar tarefa</h2>
                <input 
                value={value}
                type="text" 
                placeholder="Digite o titulo"
                onChange={ (e) => setValue(e.target.value)}
                maxLength={110}
                />
                <select 
                value={categoria}
                onChange={ (e) => setCategoria(e.target.value) }
                
                >
                    <option value="Default">Categorias</option>
                    <option value="trabalho">Trabalho</option>
                    <option value="casa">Casa</option>
                </select>
                <button type="sumbit">Adicionar</button>
            </form>
        </div>
    )
}