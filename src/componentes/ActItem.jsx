import "./ActItem.css";

function ActItem (props) {
    return(
        <li className="item-actividades">
            <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}>
                V
            </span>

            <p className={`ActItem-p ${props.completed &&"ActItem-p--complete"}`}>
                {props.text}
            </p>

            <span className="Icon Icon-delete">
                X
            </span>
        </li>
        
    )
}

export {ActItem};