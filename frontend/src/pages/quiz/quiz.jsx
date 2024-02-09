import React from "react";
import styles from './quiz.module.css';
import Logo from '../../assets/logo.png';

const Quiz = () => {
	return (
		
		<div className={styles.container}>
			<div className={styles.back}></div>
			<div className={styles.quiz}>
				<div className={styles.heading}>
					<img src={Logo} alt="logo" />
					<h1>Adhikaar</h1>
				</div>
				<div className={styles.quizque}>
					<h3>Women’s safety in today’s world</h3>
					<p>Q. What activist is actively working for strict policies against sexual harassment to ensure women's safety and promote a respectful work environment?</p>
				</div>
				<div className={styles.outerbox}>
					
				</div>
			</div>
		</div>
		
	)
};

export default Quiz;