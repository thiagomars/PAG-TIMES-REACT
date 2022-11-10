import "./Botao.css"

function Botao(props){
    return (
        <button className="botao">
            {props.text}
        </button>
    )    
}

export default Botao;