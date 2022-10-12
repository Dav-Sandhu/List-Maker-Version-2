const Item = ({ name, date, image, rank, shape }) => {
    return(
        <>
            <h3>{rank}</h3>
            <img 
                src={image} 
                alt=""
                className={shape} />
            <div className="item-info">
                {`${name} (${date})`}
            </div>

        </>
    )
}

export default Item