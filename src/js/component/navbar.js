import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar mt-0 mb-3 custom-navbar" >
		<div className="d-flex align-items-center justify-content-left">
			<Link to="/" className="mr-auto">
				<img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Star_wars_1977_us.svg/429px-Star_wars_1977_us.svg.png"} alt="Logo" height="70" className="logo" />
			</Link>
		</div>

		<div className="ml-auto">
			<div className="dropdown">
				<button className="btn dropdown-toggle btn-navbar bg-warning text-muted" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites 
					<i className="far fa-star"></i>
				</button>
				{/* <ul className="dropdown-menu dropdown-menu-end">
					{store.favorites?.map((favorite, index) => (
						<li key={index} className="dropdown-item">
							{favorite}
							<a onClick={() => actions.deleteFavorite(favorite)}>x</a>
						</li>
					))}
				</ul> */}
			</div>
		</div>
	</nav>
	);
};
