import Card from './components/cards/Card';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import data from './helper/data';
import Footer from './components/footer/Footer';
import './sass/Main.scss';
function App() {
    return (
        <>
            <Navbar />
            <Header />
            <div className="container">
                <Card data={data} />
            </div>
            <Footer />
        </>
    );
}

export default App;
