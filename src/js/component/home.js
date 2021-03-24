import React from "react";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

import NavBar from "./navbar";
import Body from "./body";
//import Cartas from "./card";
import RellenarCartas from "./card";
import Pie from "./footer";

//create your first component

const Home = () => {
	return (
		<>
			<div>
				<NavBar />
				<Body />
				<div className="d-flex justify-content-around flex-wrap m-2">
					<RellenarCartas />
				</div>
				<Pie />
			</div>
		</>
	);
};

export default Home;
