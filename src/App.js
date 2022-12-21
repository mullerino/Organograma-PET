import { useState } from 'react';
import Banner from './componentes/banner'
import Forms from './componentes/forms/forms';
import Time from './componentes/times'


function App() {
  const projetosInfo = [
    {
      projeto: 'Mãos à obra',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8FFFF'
    },
    {
      projeto: 'Apoio Pedagógico à Graduação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      projeto: 'Minicursos e oficinas',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      projeto: 'PETECA',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      projeto: 'CodePlay',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      projeto: 'Engenharia nas escolas',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    },
    {
      projeto: 'Luz Ativa',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },

  ]

  const [Membros, setMembros] = useState([])

  const AddNovoColaborador = (membro) =>{
    console.log('Membro adicionado:',membro)
    setMembros([...Membros,membro])
  }
  
  return (
    <div>
      <Banner></Banner>
      <Forms 
        novoColaboradorAdd = {AddNovoColaborador}
        projetos = {projetosInfo.map(nomeProjeto => nomeProjeto.projeto)}
      />
      {projetosInfo.map(info =>
        <Time key={info.projeto}
          projeto = {info.projeto}
          corPrimaria = {info.corPrimaria}
          corSecundaria = {info.corSecundaria}
          membros = {Membros.filter(membro => membro.projeto === info.projeto)}
        />
      )}

    </div>
  );
}

export default App;
