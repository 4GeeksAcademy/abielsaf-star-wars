import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
// import "../../styles/navbar.css";
// import logoStarWars from "../../img/star-wars-logo.png.png";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [showDropdown, setShowDropdown] = useState(false);

	const favoriteCount = store.favorites.length || 0;
	const favorites = store.favorites;

	const handleDeleteFavorite = (index) => {
		actions.deleteFavorite(index);
	};
	useEffect(() => {
		actions.loadFavorites()
	}, []);

	useEffect(() => {
		if (favorites.length > 0) {
			setShowDropdown(true);
		} else {
			setShowDropdown(false);
		}
	}, [favorites]);

	return (
		<nav className="navbar navbar-light bg-light p-3 sticky-top">

			<Link to="/" className="mr-auto">
				<img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Star_wars_1977_us.svg/429px-Star_wars_1977_us.svg.png"} alt="Logo" height="70" className="logo" />
			</Link>

			<div className="dropdown">
				<button
					className={showDropdown ? "btn btn-warning dropdown-toggle show" : "btn btn-warning dropdown-toggle"}
					type="button"
					data-bs-toggle="dropdown"
					aria-expanded="false"
					onClick={() => setShowDropdown(!showDropdown)}
				>
					Favorites
					<span className="favoriteCounter bg-dark text-white">{favoriteCount}</span>
				</button>
				<ul className={showDropdown ? "dropdown-menu show" : "dropdown-menu"}>
					{showDropdown ? (
						favorites.map((favorite, index) => (
							<li key={index}>
								<a className="dropdown-item" href="#">
									{favorite}<i className="fa-solid fa-trash-can" onClick={() => handleDeleteFavorite(index)}></i>
								</a>

							</li>
						))
					) : (
						<li>
							<span className="dropdown-item text-center">"(Empty)"</span>
						</li>
					)}
				</ul>
			</div>
		</nav>
	);
};
{/* <Link to="/" className="mr-auto">
				<img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Star_wars_1977_us.svg/429px-Star_wars_1977_us.svg.png"} alt="Logo" height="70" className="logo" />
			</Link> */}
