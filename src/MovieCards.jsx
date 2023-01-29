
function MovieCards(props) {
    return (
        <>
            <div className="card">
                <img src={props.img} alt="Image Not Found" />
                <div className="card_info">
                    <span>{props.title} <p>{props.info}</p></span>
                    <a href={props.link}>Watch</a>
                </div>
            </div>
        </>
    );
}
export default MovieCards;
