import React, { useEffect } from 'react';
import './App.css';
// import { useSelector, useDispatch } from 'react-redux';
// import { useSelector, useDispatch } from '@reduxjs/toolkit';
// import { fetchProducts } from './Features/Shop/ShopSlice';
import { useDispatch } from 'react-redux';
import { fetchProducts } from './Redux/Actions/indexActions';

function App() {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchProducts());
   }, []);

   return <div className="App"></div>;
}

export default App;
