import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer mt-auto row py-3 text-center fixed-bottom" style={{ color: '#c0c0c0' }}>
		<p className="col-6">
			Made with <i className="fa fa-heart" style={{ backgroundImage: 'linear-gradient(365deg, #e5e5e5, #d3d3d3, #a9a9a9, #8f8f8f)', WebkitBackgroundClip: 'text', color: 'transparent' }} /> by{" "}
			<a href="https://github.com/abielsaf" style={{ color: '#c0c0c0' }}>abielsaf</a>
		</p>

		<p className="col-6">
			<a href="https://www.freepik.com/free-vector/universe-exploration-composition-with-space-ship-flying-international-space-station-against-starry-sky-cartoon_16409949.htm#fromView=search&term=star+wars&track=ais&regularType=vector&page=1&position=0&uuid=70eb1883-9f9e-4842-b9cf-6a59ca6da321">Image by macrovector</a> on Freepik
		</p>

	</footer>
);
