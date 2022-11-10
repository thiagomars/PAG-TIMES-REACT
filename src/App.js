import { useState } from 'react';
import Banner from './components/Banner';
import Colaborador from './components/Colaborador';
import Formulario from './components/Formulario';
import Time from './components/Time';

function App() {

  const times = [
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Data Sciense',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE95F5',
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    }
  ];

  const [colaboladores, setColaboladores] = useState([]);
  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboladores([...colaboladores, colaborador]);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} 
        times={times.map((card) => card.nome)} 
        subtitulo="Preencha os dados para criar o card do colaborador"
      />
      {times.map(time => <Time 
                            colaboladores={colaboladores.filter(colaborador => colaborador.time === time.nome)} 
                            key={time.nome} 
                            nome={time.nome} 
                            corPrimaria={time.corPrimaria} 
                            corSecundaria={time.corSecundaria}
                          />) 
      }
    </div>
  );
}

export default App;
