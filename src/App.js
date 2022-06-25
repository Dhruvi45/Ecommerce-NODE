import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Banner from './components/autoScrollBanner/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Header/>
    <Banner/>      
    <Footer/>
    </>
  );
}

export default App;
