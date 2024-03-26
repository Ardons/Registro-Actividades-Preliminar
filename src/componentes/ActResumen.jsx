import "./ActResumen.css";

function ActResumen (props) {
    return(
        <h2 className="resumen-actividades">Actividades completadas {props.completadas} de {props.totales}</h2>
    )
}

export {ActResumen};