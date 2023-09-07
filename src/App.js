
import './App.css';
import Navbar from './Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';

import {Helmet} from "react-helmet";
import BasketContext from './Context/BasketContext';
import BasketProvider from './Context/BasketContext';

function App() {
  return (
    <div className="App">
       <Helmet>
      <title>Home Page</title>
    </Helmet>
    <BasketProvider>
      <Navbar/>
      <Outlet/>
      <Footer/>

    </BasketProvider>

    </div>
  );
}

export default App;
