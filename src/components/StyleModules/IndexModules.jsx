import React from "react";
import styles from "./IndexModules.module.css";

const IndexModules = () => {
	return (
		<div>
			<h1 className={styles.titulo}>Produto</h1>
			<p className={styles.descricao}>descrição do produto</p>
		</div>
	);
};

export default IndexModules;
