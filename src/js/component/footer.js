import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer mt-auto row py-3 text-center fixed-bottom" style={{ color: '#c0c0c0' }}>
		<p className="col-6">
			Made with <i className="fa fa-heart" style={{ backgroundImage: 'linear-gradient(365deg, #e5e5e5, #d3d3d3, #a9a9a9, #8f8f8f)', WebkitBackgroundClip: 'text', color: 'transparent' }} /> by{" "}
			<a href="https://github.com/abielsaf" style={{ color: '#c0c0c0' }}>abielsaf</a>
		</p>

		<p className="col-6"> 
			<a href="https://www.freepik.com/free-vector/mars-landscape-space-scene_5044129.htm#fromView=search&term=star+wars+background&track=ais&regularType=vector&page=1&position=21&uuid=3a0b137a-26c8-4b77-b155-7e7624e28005" style={{ color: '#c0c0c0' }}>Image by brgfx</a> on Freepik
		</p>

	</footer>
);
