function Facts({props}) {
    return (
        <>
            <h2>{props.title}</h2>
            {props.facts.map((fact, index) => (
                <p key={index}>{fact}</p>
            ))}
        </>
    )
}

export default Facts