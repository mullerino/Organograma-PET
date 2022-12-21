import './ListaSuspensa.css'

const ListaSuspensa = (props) =>{
    // o .map é um método dos array que itera dentro do array, executa uma função e retorna algo.

    const aoSelecionar = (e) =>{
        props.aoAlterado(e.target.value)
    }

    return (
        <div className='Campo'>
            <label>{props.label}</label>
            <select required = {props.obrigatorio} value={props.valor} onChange={aoSelecionar}>
                <option value='Selecione'>Selecione</option>
                {props.itens.map(item =>{
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa