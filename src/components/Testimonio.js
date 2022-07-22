import '../stylesheets/Testimonio.css'

export function Testimonio(props){
    return(
        <div className='container-testimonio'>
            <img 
                className='img-testimonio'
                src={require(`../images/${props.imagen}.png`)} 
                width={'300px'}
                heaght={'300px'}
                alt={props.desc}/>
            <div className = 'container-texto'>
                <p className='nombre-testimonio'>
                    <b>{props.nombre}</b> en {props.pais}
                </p>
                <p className='cargo-testimonio'>
                    {props.cargo} en <b>{props.empresa}</b>
                </p>
                <p className='texto-testimonio'>
                    "{props.testimonio}"
                </p>
            </div>
        </div>
    );
}