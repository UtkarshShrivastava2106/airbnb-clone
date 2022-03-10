import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import  Search  from './components/Search';
import {
  BrowserRouter as Router,
  Route,Routes
} from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home'
import SearchPage from './components/SearchPage';
function App() {
  return (
  <div className='app'>
  
 
  <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<><Banner /> <Home/></>}>  
            </Route>
<Route path='/' element={<Home/>}>
</Route>   
  <Route path='/searchpage' element={<SearchPage />}></Route>
</Routes>
  </Router>
<Footer/>
  </div>
  );
}

export default App;
