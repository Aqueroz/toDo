import "./estilo.css"

export default function Filtro({ filtro, setFiltro, setOrdem }){
    return(
        <div className="filtro__estilo">
            <h2>Filtrar</h2>
            <div className="filtro__opcoes__estilo">
                <div>
                    <p>status</p>
                    <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
                        <option value="todas">Todas</option>
                        <option value="casa">Casa</option>
                        <option value="trabalho">Trabalho</option>
                        <option value="favoritado">Favoritos</option>
                        <option value="completado">Completados</option>
                        <option value="naoCompletado">Não completados</option>

                    </select>
                </div>
                <div>
                    <p>Ordem alfabetica</p>
                    <button onClick={() => setOrdem("asc")}>Asc (A-z)</button>
                    <button onClick={() => setOrdem("desc")}>Desc (Z-a)</button>
                </div>
            </div>
        </div>
    )
}