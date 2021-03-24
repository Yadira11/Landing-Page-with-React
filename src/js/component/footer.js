import React from "react";

const Pie = () => {
	return (
		<div className="d-flex mt-4" style={pieStyle}>
			<span>Copyright © My website, 2020</span>
		</div>
	);
};

export default Pie;

const pieStyle = {
	margin: "0px",
	backgroundColor: "black",
	alignSelf: "center",
	padding: "30px",
	justifyContent: "center",
	color: "white"
};
