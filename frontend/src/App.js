import './App.css';
import Navbar from "./components/Navbar";
import AddBook from './pages/AddBook';
import Books from './pages/Books';
import Home from './pages/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/books' element={<Books />} />
    <Route path='/addbook' element={<AddBook />} />
   </Routes>
   <Footer/>
   </BrowserRouter>
    </div>
  );
}
export default App;
