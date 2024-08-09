import "./estilo.css"

export default function Busca( { buscar, setBuscar} ){
    return(
        <div className="busca__estilo">
            <h2>Pesquisar</h2>
            <input 
            type="text" 
            value={buscar} 
            onChange={(e) => setBuscar(e.target.value)} 
            placeholder="Digite o nome de uma tarefa" />
        </div>
    )
}