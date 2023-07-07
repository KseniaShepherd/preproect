import './App.css';
import { Route, Routes } from "react-router-dom";
import MainPage from './pages/MainPage';
import CategoriesPage from './pages/CategoriesPage';
import AllProductsPage from './pages/AllProductsPage';
import SingleProdyctPage from './pages/SingleProdyctPage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';
import NavMenu from './components/NavMenu';
import ProductsByCategoryPage from './pages/ProductsByCategoryPage';


function App() {
  return (
    <div className="App">
      <NavMenu/>
      <Routes>
        <Route path='/' element= {<MainPage/>}/>
        <Route path='/categories' element= {<CategoriesPage/>}/>
        <Route path='/products' element= {<AllProductsPage/>}/>
        <Route path='/products/:id' element= {<SingleProdyctPage/>}/>
        <Route path='/cart' element= {<CartPage/>}/>
        <Route path='/*' element= {<NotFoundPage/>}/>
        <Route path='//categories/:category' element= {<ProductsByCategoryPage/>}/>



      </Routes>
    </div>
  );
}

export default App;
