import React, { Fragment } from "react";
import Logo from '../../assets/logo.png';
import styles from './forum.module.css';
import Post from './post/post.jsx';
// import Glass from '../../assets/glass.png';
// import Search from '../../assets/magnifying-glass.png';

const Forum = () => {
	
	return (
		<Fragment>
			<div className={styles.container}>
				<div className={styles.heading}>
					<h1>Forums!</h1>
				</div>
				<div className={styles.image}>
					<img src={Logo} alt='logo'/>
				</div>
			</div>
			<div className={styles.search}>
			<input type='text' className={styles.searchbar} placeholder='  Would this count as bullying?' />
			</div>
			<div className={styles.post}>
				<Post />
			</div>
			{/* <div className={styles.ending}>
				<h3>Didn't find your answer?<br />Post your question!</h3>
				<img src={Glass} alt='glass'/>
			</div> */}
		</Fragment>
  )
};

export default Forum;