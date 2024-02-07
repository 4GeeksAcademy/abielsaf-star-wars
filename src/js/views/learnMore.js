import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
// import defaultPicture from "../../img/picture-not-available.jpg";
import "../../styles/learnMore.css"


export const LearnMore = () => {
    const { store, actions } = useContext(Context);
    const { dataType, uid } = useParams();
    const [details, setDetails] = useState(null);

    useEffect(() => {
        let storedDetails;
        let loadDetailsAction;

        if (dataType === "characters") {
            storedDetails = localStorage.getItem(`characters-${uid}`);
            loadDetailsAction = actions.loadDetailsCharacters();
        } else if (dataType === "vehicles") {
            storedDetails = localStorage.getItem(`vehicle-${uid}`);
            loadDetailsAction = actions.loadDetailsVehicles();
        } else if (dataType === "planets") {
            storedDetails = localStorage.getItem(`planet-${uid}`);
            loadDetailsAction = actions.loadDetailsPlanets();
        }

        if (storedDetails) {
            setDetails(JSON.parse(storedDetails));
        } else {
            loadDetailsAction(uid);
        }
    }, [dataType, uid, actions]);

    return (
        <div>
            {details && details.result && (
                <div>
                    <div className="introContainer m-4 d-flex">
                        <div>
                            <img src={`https://starwars-visualguide.com/assets/img/${dataType}/${uid}.jpg`} onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = defaultPicture;
                            }} alt="details" />
                        </div>
                        <div className="textDetails p-5">
                            <h1>{details.result.properties.name}</h1>
                            <p>En una galaxia muy, muy lejana, la lucha entre el lado luminoso y el lado oscuro continúa. Los planetas se alzan como testigos silenciosos de esta eterna batalla cósmica. Entre los astros, Tatooine emerge como un páramo árido y desolado, hogar de criaturas misteriosas y aventureros audaces. Mientras tanto, en la vastedad del espacio, naves espaciales surcan las estrellas, desde los icónicos X-Wings de la Alianza Rebelde hasta los imponentes Star Destroyers del Imperio Galáctico. En medio de este conflicto interminable, héroes y villanos se elevan, cada uno con su propio destino entrelazado en la tela de la historia galáctica. Desde los Jedi, protectores de la paz y la justicia, hasta los Sith, seguidores del poder y la dominación, el universo de Star Wars brilla con una diversidad de mundos, personajes y aventuras que capturan la imaginación de generaciones.</p>
                        </div>
                        <hr />
                    </div>
                    <div className="container px-4 text-center">
                        <div className="row gx-5 border-top border-warning">
                            <div className="col">
                                <div className="p-3">{"Name: " + details.result.properties.name}</div>
                            </div>
                            <div className="col">
                                <div className="p-3">{dataType === "vehicles" ? "Crew: " + details.result.properties.crew : dataType === "characters" ? "Mass: " + details.result.properties.mass : dataType === "planets" ? "Climate: " + details.result.properties.climate : "Loading"}</div>
                            </div>
                            <div className="col">
                                <div className="p-3">{dataType === "vehicles" ? "Model: " + details.result.properties.model : dataType === "characters" ? "Height: " + details.result.properties.height : dataType === "planets" ? "Diameter: " + details.result.properties.diameter : "Loading"}</div>
                            </div>
                            <div className="col">
                                <div className="p-3">{dataType === "vehicles" ? "Passengers: " + details.result.properties.passengers : dataType === "characters" ? "Eye color: " + details.result.properties.eye_color : dataType === "planets" ? "Gravity: " + details.result.properties.gravity : "Loading"}</div>
                            </div>
                        </div>
                        <span className="border-top border-warning"></span>
                    </div>

                </div>
            )}
        </div>
    );

};