import React from "react";

export function Body() {
	return (
		<div className="pt-5 pb-5" style={estiloBody}>
			<h1>A warm welcome!</h1>
			<div style={texto}>
				<span>
					La carta general es un texto funcional que se utiliza para comunicar ideas, pensamientos; relatar experiencias reales o imaginarias; expresar emociones o sensaciones; informar sobre hechos ocurridos; describir un situaciones, objetos, personas, etcétera. En resumen, en una carta se pueden plasmar todo tipo de intenciones comunicativas, su redacción dependerá del objetivo que tenga el emisor y el destinatario al cual va dirigida.
				</span>
				<br />
				<button type="button" className="btn btn-primary mt-3 ">
					Click to action
				</button>
			</div>
		</div>
	);
}
const estiloBody = {
	backgroundColor: "	rgb(190,190,190)",
	margin: "15px",
	borderRadius: "10px",
	padding: "20px",
	marginLeft: "30px",
	marginRight: "30px",
	marginTop: "70px"
};

const texto = {
	textAlign: "justify"
};
