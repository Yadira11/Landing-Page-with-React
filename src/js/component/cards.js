import React from "react";
import PropTypes from "prop-types";

const Cartas = props => {
	return (
		<div className="card mt-4" style={{ width: "20rem" }}>
			<img
				className="card-img-top"
				src={props.foto}
				alt="Imagen de carta"
			/>
			<div
				className="card-body d-flex flex-column justify-content-center"
				style={texto}>
				<h5 className="card-title">{props.titulo}</h5>
				<p className="card-text">{props.contenido}</p>
				<a href="#" className="btn btn-primary ">
					Find out more!
				</a>
			</div>
		</div>
	);
};

export default Cartas;

Cartas.propTypes = {
	foto: PropTypes.string,
	contenido: PropTypes.string,
	titulo: PropTypes.string
};

const texto = {
	textAlign: "justify"
};
