import React from "react";
import PropTypes from "prop-types";

export function RellenarCartas() {
	let Carta1 = {
		titulo: "Carta 1",
		foto:
			"https://p4.wallpaperbetter.com/wallpaper/352/974/561/foliage-forest-4k-pathway-wallpaper-preview.jpg",
		contenido:
			"La carta es un medio a través del cual una persona o institución se comunica con otra remitiéndole un mensaje que bien puede estar escrito en un papel o en un medio digital."
	};

	let Carta2 = {
		titulo: "Carta 2",
		foto:
			"https://p4.wallpaperbetter.com/wallpaper/186/285/271/bare-fog-forest-foggy-rainy-wallpaper-preview.jpg",
		contenido:
			"Cartulina pequeña de forma rectangular que lleva impresos por una de sus caras el dibujo de una figura o de un número determinado de objetos y por la otra un dibujo uniforme; junto con otras, forma la baraja."
	};
	let Carta3 = {
		titulo: "Carta 3",
		foto:
			"https://c4.wallpaperflare.com/wallpaper/856/616/845/bosque-naturaleza-paisaje-wallpaper-preview.jpg",
		contenido:
			"La carta representa una forma tradicional de comunicación entre personas en sociedad. En una carta formal la relación entre dos personas es distante. Puede tratarse de una carta con fines laborales, comerciales, etc donde esa relación (emisor y destinatario de la carta) es lejana o desconocida."
	};
	let Carta4 = {
		titulo: "Carta 4",
		foto:
			"https://p0.piqsels.com/preview/419/828/902/black-and-white-cold-fog-forest.jpg",
		contenido:
			"Por otra parte la carta informal es aquella donde ambas partes tienen una relación afectiva o cercana. En este caso la carta permite que el emisor olvide o evite ciertas pautas de la estructura de la carta."
	};
	let ArrCartas = [Carta1, Carta2, Carta3, Carta4];

	return ArrCartas.map(function(carta, i) {
		return (
			<Cartas
				key={i}
				titulo={ArrCartas[i].titulo}
				foto={ArrCartas[i].foto}
				contenido={ArrCartas[i].contenido}
			/>
		);
	});
}
export function Cartas(props) {
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
}

Cartas.propTypes = {
	foto: PropTypes.string,
	contenido: PropTypes.string,
	titulo: PropTypes.string
};

const texto = {
	textAlign: "justify"
};