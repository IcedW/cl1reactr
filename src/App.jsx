import './App.css'
import Header from './header.jsx'
import Photos from './photos.jsx'
import Contact from './contact.jsx'
import ReactDOM from 'react-dom/client'

function App() {
    return (
        <>
            <Header
                props={{
                    fullName: 'Corn Soup',
                    title: 'Creamy Corn Soup Recipe'
                }}
            />

            <Photos
                props={{
                    title: 'Ingredients',
                    images: [
                        { src: './src/assets/corn.png', alt: 'Corn' },
                        { src: './src/assets/potato.png', alt: 'Potato' },
                        { src: './src/assets/butter.png', alt: 'Butter' }
                    ],
                    ingredients: [
                        '2 cups corn',
                        '1 potato',
                        '500 ml vegetable broth',
                        '2 tbsp butter',
                        'Salt to taste',
                        'Black pepper to taste'
                    ]
                }}
            />

            <Contact
                props={{
                    title: 'Preparation',
                    steps: [
                        'Peel and cut the potato.',
                        'Melt the butter in a pot.',
                        'Add the potato and corn.',
                        'Pour in the vegetable broth.',
                        'Cook for 20 minutes.',
                        'Blend until smooth.',
                        'Add salt and black pepper.',
                        'Serve hot.'
                    ]
                }}
            />
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)