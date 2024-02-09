import React from "react";
import styles from './parentDetail.module.css';
import Logo from '../../assets/logo.png';

const ParentDetail = () => {
	return (
		<>
		<div className={styles.container}>
			<img src={Logo} alt="Logo" />
			<h1>Adhikaar</h1>
		</div>
		<div className={styles.container1}>
			<div className={styles.background}></div>
			<div className={styles.parentDetail}>
				<h2 className={styles.heading}>Parent Details</h2>
				<form className={styles.form}>
					<div className={styles.formGroup}>
						<input className={styles.input} type='text' placeholder="Father's name" />
					</div>
					<div className={styles.formGroup}>
						<input className={styles.input} type='text' placeholder="Father's DOB (DD/MM/YYYY)" />
					</div>
					<div className={styles.formGroup}>
						<input className={styles.input} type='text' placeholder="Father's Occupation" />
					</div>
					<div className={styles.formGroup}>
						<input className={styles.input} type='text' placeholder="Mother's Name" />
					</div>
					<div className={styles.formGroup}>
						<input className={styles.input} type='text' placeholder="Mother's DOB (DD/MM/YYYY)" />
					</div>
					<div className={styles.formGroup}>
						<input className={styles.input} type='text' placeholder="Mother's Occupation" />
					</div>
					<div className={styles.formGroup}>
						<input className={styles.input} type='text' placeholder="City" />
					</div>
					<div className={styles.formGroup}>
						<button className={styles.input} type="submit">Submit</button>
					</div>
				</form>
			</div>
		</div>
		</>
	);
};

export default ParentDetail;