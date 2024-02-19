import React, { useContext } from "react";

import { CardCarousel } from "../component/CardCarousel";
import "../../styles/home.css";

export const Home = () => {

	return (
		<div className="listHome mt-5">
			<h2 className="beige">Character:</h2>
			<CardCarousel dataType="characters" />
			<h2>Planets:</h2>
			<CardCarousel dataType="planets" />
			<h2>Vehicles:</h2>
			<CardCarousel dataType="vehicles" />
		</div>
	);
};