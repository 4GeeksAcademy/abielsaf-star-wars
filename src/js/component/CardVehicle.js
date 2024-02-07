import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import defaultPicture from "../../img/picture-not-available.jpeg";
// import "../../styles/cardComponent.css";

export const CardVehicle = ({ uid, name, dataType }) => {
    const { actions } = useContext(Context);
    const [vehicleDetails, setVehicleDetails] = useState(null);

    useEffect(() => {
        const storedVehicleDetails = localStorage.getItem(`vehicle-${uid}`);
        if (storedVehicleDetails) {
            setVehicleDetails(JSON.parse(storedVehicleDetails));
        } else {
            actions.loadDetailsVehicles(uid);
        }
    }, [uid]);


    return (

        <div key={uid} className="col contactList d-flex">
            <div className="card" style={{ width: "18rem", flex: "0 0 auto" }}>
                <img src={`https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = defaultPicture;
                    }} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title fs-4">{name}</h5>
                    {vehicleDetails && vehicleDetails.result && (
                        <div className="cardDetails">
                            <p className="card-text fs-6 fw-light"> Crew: {vehicleDetails.result.properties.crew} </p>
                            <p className="card-text fs-6 fw-light"> Model: {vehicleDetails.result.properties.model}</p>
                            <p className="card-text fs-6 fw-light"> Passengers: {vehicleDetails.result.properties.passengers} </p>
                        </div>
                    )}
                    <div className="buttonsCard d-flex justify-content-between">
                        <Link to={`/details/${dataType}/${uid}`} className="btn btn-outline-primary">Learn More</Link>
                        <button onClick={() => { actions.addFavorites(name) }} type="button" className="btn btn-outline-warning"><i className="fa-regular fa-heart fa-beat"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};