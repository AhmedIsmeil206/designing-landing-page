import './App.css'
import { Routes, Route } from "react-router-dom";
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Body />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
