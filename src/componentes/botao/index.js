import './botao.css'

const Botao = (props)=>{
    return (
        <button type='submit'>{props.children}</button>
    )
}

export default Botao