import React from "react";
import styles from './rank.module.css';

const Rank = (props) => {
	return(
		<div className={styles.container}>
			<h3>{props.rank}</h3>
			<img src={props.image} alt="Profile" />
			<h3>{props.name}</h3>
			<h3>{props.points}</h3>
		</div>
	)
};

export default Rank;