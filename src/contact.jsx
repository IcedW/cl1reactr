function Contact({ props }) {
    return (
        <section>
            <h2>{props.title}</h2>
            <ol>
                {props.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ol>
        </section>
    );
}

export default Contact;