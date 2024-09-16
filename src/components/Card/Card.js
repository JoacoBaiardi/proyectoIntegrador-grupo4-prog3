import "./Card.css"

const Card= (props) => {
    const {title,image} = props;

    return(
        <article className='card'>
            <h2> {title}</h2>
            <img src={`${image}`} alt="" />
        </article>

    )
}

export default Card