import './App.css';
import { BrowserRouter, useHistory } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cookie from './components/Cookie';

function App() {
  let history = useHistory();
  return (
    <>
      <BrowserRouter history={history}>
        <Navbar />
        <Cookie />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
