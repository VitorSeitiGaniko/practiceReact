import React from "react";
import { Link, NavLink } from "react-router-dom";

const Haeder = () => {
	return (
		<nav>
			{/* <Link to="/">Home</Link>
			<Link to="sobre">Sobre</Link> */}

			<NavLink to="/">Home</NavLink>
			<NavLink to="sobre">Sobre</NavLink>
		</nav>
	);
};

export default Haeder;
