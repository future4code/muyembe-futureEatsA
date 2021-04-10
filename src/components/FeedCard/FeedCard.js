import React from "react";
import {useHistory} from "react-router-dom";
import {restaurant} from "../../Routes/coordinator";


const FeedCard = (props) => {

    const history = useHistory()

    return (
        <div>
            <h2>{props.name.name}</h2>
            <div>{props.id.id}</div>
            <button onClick={()=>restaurant(history,props.id.id)}> Ver detalhes do restaurante</button>
        </div>
    )
}

export default FeedCard;

//*** Página criada para testar useParams ***/