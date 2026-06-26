function Photos({props}) {
    return (
        <>
            <h2>{props.title}</h2>
            {props.images.map((image, index) => (
                <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    style={{height: '300px', width: '300px', objectFit: 'cover', borderRadius: '10px'}}
                />
            ))}
        </>
    )
}

export default Photos