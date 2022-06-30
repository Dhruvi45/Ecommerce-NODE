import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "./components/Style.scss"
function App() {
  return (
    <>
      <Header />
      <div class="container">
        <div
          class="container__image">
          <div class="container__info container__author">Photo by
            <a class="link" href="https://instagram.com/silvia.diaconescu" target="_blank">
              Silvia Diaconescu
            </a>
          </div>
          <div class="container__info container__location">Geneva Lake Switzerland </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
