import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";

import "./Formulario.css"

import { useState } from 'react';

function Formulario(props){

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado ({
            nome,
            cargo,
            imagem,
            time
        })

        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    }

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>{props.subtitulo}</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    itens={props.times} 
                    label="Time"
                    valor={time}
                    aoAlterar={valor => setTime(valor)}
                />
                <Botao text="Criar Card"/>
            </form>
        </section>
    )
}

export default Formulario;