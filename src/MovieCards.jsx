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



{/* <div class="card" style={{ width: '252px', border: '1px solid' }}>
    <img class="card-img-top" src={props.img} alt="Image not found" style={{ width: '250px', height: '300px' }} />
    <div class="card-body">
        <h4 class="card-title"><a>{props.title}</a></h4>
        <p class="card-text">The Untold Story</p>
        <a href={props.link} class="btn btn-primary">Watch</a>
    </div>
</div> */}