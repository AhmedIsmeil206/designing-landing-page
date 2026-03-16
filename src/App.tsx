import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from '@components/header';
import Body from '@components/body';
import Footer from '@components/footer';
import BlogPage from './pages/blog-page';
import RegisterPage from './pages/register-page';

function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <Header />
                        <Body />
                        <Footer />
                    </>
                }
            />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/register" element={<RegisterPage />} />
        </Routes>
    );
}

export default App;
