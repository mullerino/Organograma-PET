import CardColaborador from '../cardColaborador'
import './time.css'

const Time = (props) =>{
    const estiloFundo = {backgroundColor: props.corSecundaria}
    const estiloBorder = {borderColor: props.corPrimaria}
    
    // para fazer uma renderização condicional, coloca-se a condição a esquerda e o que deve ocorrer se vdd na direita
    return (
        props.membros.length > 0 && <section className='projeto' style={estiloFundo}> 
            <h3 style={estiloBorder}>{props.projeto}</h3>
            <div className='projeto-time'>
                {props.membros.map(colaborador => 
                    <CardColaborador 
                        key={colaborador.nome}
                        nome={colaborador.nome} 
                        cargo={colaborador.cargo} 
                        img = {colaborador.imagem} 
                        corPrimaria={props.corPrimaria}
                    />
                )}
            </div>
        </section>

    )
}

export default Time