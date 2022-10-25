import { Link } from "react-router-dom";

function Error(){
    return(
        <div>
            <h1>
                Erreur 404
            </h1>
            <p>
                La page demandée n'existe pas!!
            </p>
            <Link to='/'><h3>Retour sur la page d'acceuil</h3></Link>
        </div>
    )
}
export default Error;