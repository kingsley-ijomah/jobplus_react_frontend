import './App.css';
import { BrowserRouter, useHistory } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  let history = useHistory();
  return (
    <>
      <BrowserRouter history={history}>
        <Navbar />
      </BrowserRouter>
    </>
  );
}

export default App;
