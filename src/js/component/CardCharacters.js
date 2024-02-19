import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import defaultPicture from "../../img/picture-not-available.jpeg";
import "../../styles/cardComponent.css";

export const CardCharacters = ({ uid, name, dataType }) => {
    const { store, actions } = useContext(Context);
    const [charactersDetails, setCharactersDetails] = useState(null);

    useEffect(() => {
        const storedCharactersDetails = localStorage.getItem(`characters-${uid}`);
        if (storedCharactersDetails) {
            setCharactersDetails(JSON.parse(storedCharactersDetails));
        } else {
            actions.loadDetailsCharacters(uid);
        }
    }, [uid]);

    return (

        <div key={uid} className="col contactList d-flex" data-bs-theme="dark">
            <div className="card" style={{ width: "18rem", flex: "0 0 auto" }}>
                <img src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = defaultPicture;
                    }} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    {charactersDetails && charactersDetails.result && (
                        <div className="cardDetails">
                            <p className="card-text fs-6 fw-light"> Birthday: {charactersDetails.result.properties.birth_year} </p>
                            <p className="card-text fs-6 fw-light"> Hair color: {charactersDetails.result.properties.hair_color}</p>
                            <p className="card-text fs-6 fw-light"> Height: {charactersDetails.result.properties.height} </p>
                        </div>
                    )}
                    <div className="buttonsCard d-flex justify-content-between">
                        <Link to={`/details/${dataType}/${uid}`} className="btn btn-outline-primary">Learn More</Link>
                        <button onClick={() => { actions.addFavorites(name) }} type="button" className="btn btn-outline-warning"><i className="fa-solid fa-heart"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};