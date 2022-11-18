import React, { useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
// import { useSelector, useDispatch } from '@reduxjs/toolkit';
// import { fetchProducts } from './Features/Shop/ShopSlice';
import { fetchProducts } from './Redux/Actions/indexAction';
import { fetchProductsLoadingHandler } from './Redux/Actions/appAction';

function App() {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchProducts());
      dispatch(fetchProductsLoadingHandler(true));
   }, []);

   return <div className="App"></div>;
}

export default App;
