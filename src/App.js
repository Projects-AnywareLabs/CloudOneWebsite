import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Page from './components/Page';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          {/* <Route path="/products" element={<Page heading="PRODUCTS" />}></Route> */}
          {/* <Route path="/pricing" element={<Page heading="PRICING" />}></Route> */}
          {/* <Route path="/resources" element={<Page heading="RESOURCES" />}></Route> */}
        </Routes>
      <Footer/>
    </>
    
  );
}

export default App;
