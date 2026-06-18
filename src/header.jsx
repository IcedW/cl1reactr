function Header({props}) {
    return (
        <>
            <h1>{props.title}</h1>
            <h2>{props.country}</h2>
            <p>was founded: {props.founded}</p>
        </>
    )
}

export default Header