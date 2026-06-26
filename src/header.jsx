function Header({props}) {
    return (
        <>
            <h1>{props.fullName}</h1>
            <h2>{props.title}</h2>
        </>
    )
}

export default Header