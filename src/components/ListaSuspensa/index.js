import "./ListaSuspensa.css";

function ListaSuspensa(props){
    return(
        <div className="listaSuspensa">
            <label>{props.label}</label>
            <select value={props.valor} onChange={evento => props.aoAlterar(evento.target.value)}>
                {props.itens.map((item) => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa;