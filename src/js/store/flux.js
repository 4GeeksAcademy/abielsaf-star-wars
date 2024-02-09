
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: [],
			favorites: [],
		},
		actions: {
			loadCharacter: () => {
				return fetch("https://www.swapi.tech/api/people")
					.then(res => res.json())
					.then(data => {
						setStore({ characters: data.results });
					})
			},
			loadPlanets: () => {
				return fetch("https://www.swapi.tech/api/planets")
					.then(res => res.json())
					.then(data => {
						setStore({ planets: data.results });
					})
			},
			loadVehicles: () => {
				return fetch("https://www.swapi.tech/api/vehicles")
					.then(res => res.json())
					.then(data => {
						setStore({ vehicles: data.results });
					})
			},
			loadFavorites: () => {
				const favoritesFromStorage = JSON.parse(localStorage.getItem("favorites")) || [];
				setStore({ favorites: favoritesFromStorage });
			},
			loadDetailsPlanets: (uid) => {
				return fetch(`https://www.swapi.tech/api/planets/${uid}`)
					.then(res => res.json())
					.then(data => {
						const { planets } = getStore();
						const updatedPlanetsList = planets.filter((item) => item.uid !== uid);
						setStore({ planets: updatedPlanetsList });
						localStorage.setItem(`planet-${uid}`, JSON.stringify(data));
					});
			},
			loadDetailsVehicles: (uid) => {
				return fetch(`https://www.swapi.tech/api/vehicles/${uid}`)
					.then(res => res.json())
					.then(data => {
						const { vehicles } = getStore();
						const updatedVehiclesList = vehicles.filter((item) => item.uid !== uid);
						setStore({ vehicles: updatedVehiclesList });
						localStorage.setItem(`vehicle-${uid}`, JSON.stringify(data));
					});
			},
			loadDetailsCharacters: (uid) => {
				return fetch(`https://www.swapi.tech/api/people/${uid}`)
					.then(res => res.json())
					.then(data => {
						const { characters } = getStore();
						const updatedCharactersList = characters.filter((item) => item.uid !== uid);
						setStore({ characters: updatedCharactersList });
						localStorage.setItem(`characters-${uid}`, JSON.stringify(data));
					});
			},
			addFavorites: (name) => {
				let store = getStore();
				if (!store.favorites.includes(name)) {
					const updatedFavorites = [...store.favorites, name];
					setStore({ favorites: updatedFavorites });
					localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
				} else {
					alert("Ya ha sido agregado a favoritos")
				}
			},

			deleteFavorite: (index) => {
				const { favorites } = getStore();
				const updatedFavorites = [...favorites];
				updatedFavorites.splice(index, 1);
				setStore({ favorites: updatedFavorites });
				localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
			},

		}
	}

};

export default getState;
