import './cardColaborador.css'

const CardColaborador = ({nome,img,cargo,corPrimaria}) =>{
    const colorCard = {backgroundColor: corPrimaria}

    return (
        <div className='colaborador'>
            <div className='cabecalho' style={colorCard}>
                <img src={img} alt={nome}></img>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>   
    )
}

export default CardColaborador