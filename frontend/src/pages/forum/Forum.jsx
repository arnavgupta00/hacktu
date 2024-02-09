import React, { Fragment } from "react";
import Logo from '../../assets/Logo.png';
import styles from './forum.module.css';

const Forum = () => {
	const [posts, setPosts] = useState([]);
	return (
		<Fragment>
			<div className={styles.container}>
				<div className={styles.heading}>
					<h1>Forums!</h1>
				</div>
				<div className={styles.image}>
					<image src={Logo} alt='logo' />
				</div>
				<div>

				</div>
			</div>
		</Fragment>
  )
};

export default Forum;