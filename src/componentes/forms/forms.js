import { useState } from "react"
import Botao from "../botao"
import CampoTexto from "../CampoTexto"

import ListaSuspensa from "../ListaSuspensa"

import './forms.css' 

const Forms = (props) =>{
    const cargos = ['Membro', 'Coordenador']

    const [nome,setNome] = useState('')
    const [imagem,setImagem] = useState('')
    const [projeto, setProjeto] = useState()
    const [cargoAtual, setCargo] = useState('')

    const salvarCard = (e) =>{
        e.preventDefault()
        console.log('Form submetido =>', nome, cargoAtual, imagem, projeto)
        props.novoColaboradorAdd({
            nome: nome,
            imagem : imagem,
            projeto: projeto,
            cargo: cargoAtual
        })

        setNome('')
        setImagem('')
        setCargo('')
        setProjeto('')
        alert('Card adicionado!')
    }

    return (
        <section className="formulario">
            <form onSubmit={salvarCard}>
                <h1>Preencha os dados para criar o card do membro.</h1>
                <CampoTexto
                    obrigatorio = {true}
                    label = 'Nome' 
                    acao = 'Digite seu nome'
                    valor = {nome}
                    aoAlterado = {valor => setNome(valor)}    
                />
                <ListaSuspensa
                    label='Cargo no projeto' 
                    itens = {cargos} 
                    obrigatorio = {true}
                    valor = {cargoAtual}
                    aoAlterado = {valor => setCargo(valor)}
                 />
                <CampoTexto 
                    obrigatorio = {true} 
                    label = 'Imagem' 
                    acao = 'Informe o endereço da imagem' 
                    valor={imagem} 
                    aoAlterado = {valor => setImagem(valor)}
                />
                <ListaSuspensa
                    label='Projeto' 
                    itens = {props.projetos} 
                    obrigatorio = {true} 
                    valor={projeto} 
                    aoAlterado ={valor => setProjeto(valor)}
                />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Forms