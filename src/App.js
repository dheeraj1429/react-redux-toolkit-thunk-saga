import React, { useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
// import { fetchProducts } from './Features/Shop/ShopSlice';
// import { fetchProducts } from './Redux/Actions/indexActions';
import { fetchProducts } from './Features/Products/productsSlice';

function App() {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchProducts());
   }, []);

   return <div className="App"></div>;
}

export default App;
