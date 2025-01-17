"use client";

import React, { useEffect } from 'react'
import Header from './header'
import Footer from './footer'
import { useDispatch, useSelector } from 'react-redux'
import { setCartData } from '@/Redux/CartData/cartDataSlice'
import { fetchProducts } from '@/Apis/FetchProducts'
import { fetchPagesContent } from '@/Apis/FetchPagesData'
import Loader from '../UI/loader'
import { fetchCategories } from '@/Apis/FetchCategories';

const LayoutWithReduxState = ({ children }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.productData);
  const { pagesLoading } = useSelector((state) => state.pagesContent);
  const { categoryLoading } = useSelector((state) => state.categories);

  useEffect(() => {
    const fetchData = async () => {
      await fetchProducts(dispatch);
      await fetchPagesContent(dispatch);
      await fetchCategories(dispatch);
    };
    fetchData();
    if (typeof window !== "undefined") {
      dispatch(setCartData(localStorage.getItem('cartId')))
    }
  }, [dispatch])

  if (loading || pagesLoading || categoryLoading) {
    return <Loader/>
  }

  return (
    <div className='flex flex-col items-center'>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default LayoutWithReduxState


