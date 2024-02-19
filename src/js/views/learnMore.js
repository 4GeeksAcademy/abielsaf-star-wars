import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import defaultPicture from "../../img/picture-not-available.jpeg";
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
        <div className="beige">
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
                            <p>This story happened a long time ago in a galaxy far, far away. It is already over. Nothing can be done to change it. It is a story of love and loss, brotherhood and betrayal, courage and sacrifice and the death of dreams. It is a story of the blurred line between our best and our worst. It is the story of the end of an age.</p>
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