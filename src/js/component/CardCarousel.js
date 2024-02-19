import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { CardPlanets } from "./CardPlanets";
import { CardVehicle } from "./CardVehicle";
import { CardCharacters } from "./CardCharacters";
import "../../styles/cardCarousel.css";

export const CardCarousel = ({ dataType }) => {
    const { store, actions } = useContext(Context);
    const dataToDisplay = store[dataType] || [];

    const CardComponent = dataType === "characters"
        ? CardCharacters
        : dataType === "vehicles"
            ? CardVehicle
            : dataType === "planets"
                ? CardPlanets
                : null;

    return (
        <div className="carousels row d-flex flex-nowrap overflow-auto" data-bs-theme="dark">
            {dataToDisplay.map((item, index) => (
                <CardComponent key={item.uid} uid={item.uid} name={item.name} dataType={dataType} />
            ))}
        </div>
    );
};