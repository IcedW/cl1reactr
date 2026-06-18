function Photos({props}) {
    return (
        <>
            <h2>{props.title}</h2>
            {props.images.map((image, index) => (
                <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    style={{height: '200px', objectFit: 'cover'}}
                />
            ))}
        </>
    )
}

export default Photos