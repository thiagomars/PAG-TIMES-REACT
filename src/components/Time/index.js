import Colaborador from '../Colaborador';
import './Time.css'

function Time(props){

    return(
        <>
           {props.colaboladores.length > 0
           ? <section className='time' style={{ backgroundColor: props.corSecundaria }}>
                <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
                <div className='colaboladores'>
                {props.colaboladores.map( colaborador => <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} key={props.nome} />)}
                </div>
            </section>
            : null
           }

        </>
        
    )
}

export default Time;