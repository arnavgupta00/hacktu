import React from "react";
import styles from './post.module.css';

const Post = (props) => {
	
	return (
		<div className={styles.container}>
			<div>
				<h1>{props.heading}</h1>
			</div>
			<div>
				<p>{props.data}</p>
			</div>
		</div>
  )
};

export default Post;