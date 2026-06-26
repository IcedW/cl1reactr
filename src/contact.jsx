function Contact({props}) {
    return (
        <>
            <h2>{props.title}</h2>
            <div>
                <p>phone: <a href={`tel:${props.phone}`}>{props.phone}</a></p>
                <p>email: <a href={`mailto:${props.email}`}>{props.email}</a></p>
            </div>
        </>
    )
}

export default Contact