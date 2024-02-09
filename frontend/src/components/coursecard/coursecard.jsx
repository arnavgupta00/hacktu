

const coursecard = (props) => {
    return ( 
        <>
            <div style={{backgroundImage:`url(${props.img})`}}>
                    <h1>{props.heading}</h1>
                    <h5>{props.subheading}</h5>
            </div>
        </>
     );
}
 
export default coursecard;