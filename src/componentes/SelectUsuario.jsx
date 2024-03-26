import "./SelectUsuario.css";

function SelectUsuario (props) {
    return(
        <h1 className="usuario-seleccionado">
            Usuario: {props.usuario1}
        </h1>
    )
}

export {SelectUsuario};