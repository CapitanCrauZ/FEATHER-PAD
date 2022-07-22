import './stylesheets/App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="Testimonios">
        <Main/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
