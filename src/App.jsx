import './App.css'
import Header from './header.jsx'
import Photos from './photos.jsx'
import Contact from './contact.jsx'
import ReactDOM from 'react-dom/client'

function App() {
    return (
        <>
            <Header props={{
                fullName: 'name lastname',
                title: 'the cook'
            }} />

            <Photos props={{
                title: 'Photo',
                images: [
                    {src: './src/assets/cat.png', alt: 'face-photo'}
                ]
            }} />

            <Contact props={{
                title: 'contact info',
                phone: '+380 73 234 55 55',
                email: 'random@email.com'
            }} />
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)