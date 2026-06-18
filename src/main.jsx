import './styles/MyButton.css'

function MyButton({params}) {
    return (
        <>
            <button
                style={{
                    backgroundColor: params.color,
                    width: params.width,
                    height: params.height,
                }}>{params.text}
            </button>
        </>
    )
}

export default MyButton


