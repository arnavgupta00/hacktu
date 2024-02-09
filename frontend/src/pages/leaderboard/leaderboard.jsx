import React from "react";
import styles from './leaderboard.module.css';
import Rank from './rank/rank.jsx';
import Logo from '../../assets/logo.png';


const Leaderboard = () => {
	return(
		<>
		<div className={styles.container}>
			<div className={styles.background}></div>
			<div className={styles.container1}>
				<div className={styles.heading}>
					<h1>Leaderboard</h1>
					<img src={Logo} alt="logo" />
				</div>
				<div>
					<Rank />
				</div>
			</div>
		</div>
		</>
	)
};

export default Leaderboard;