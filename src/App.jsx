import './App.css'
import Header from './header.jsx'
import Photos from './photos.jsx'
import Facts from './facts.jsx'
import ReactDOM from 'react-dom/client'

function App() {
    return (
        <>
            <Header props={{
                title: 'veseli nad moravou',
                country: 'czechia',
                founded: 'approx. 5700–4900 BC'
            }} />

            <Photos props={{
                title: 'city photos',
                images: [
                    {src: 'src/assets/IMG1.png', alt: 'img1'},
                    {src: 'src/assets/IMG1.jpg', alt: 'img2'}
                ]
            }} />

            <Facts props={{
                title: 'fun facts',
                facts: [
                    'The town is situated on the Morava River, a Part of the Baťa Canal runs along the river.',
                    'The first written mention of Veselí is from 1261, when a water castle with a settlement existed here.',
                    "In the Thirty Years' War, Veselí and Předměstí Veselí were burned down several times, and the castle was looted."
                ]
            }} />
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)