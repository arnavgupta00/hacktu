import React from "react";
import styles from './post.module.css';

const Post = ({props}) => {
	
	return (
		<div className={styles.container}>
			<div>
				<p>{props.title}</p>
			</div>
			<div>
				<p>{props.content}</p>
			</div>
		</div>
  )
};

export default Post;