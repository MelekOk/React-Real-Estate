import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { fetchPages } from '../store/pageSlice';

export default function Hero({ slug }){
    const dispatch = useDispatch();
    const { data: pages, status, error } = useSelector((state) => state.pages);
  
    useEffect(() => {
      if (status === 'idle') {
        dispatch(fetchPages());
      }
    }, [dispatch, status]);
  
    if (status === 'loading') return <p>Loading...</p>;
    if (status === 'failed') return <p>{error}</p>;
  
    const currentPage = pages.find(page => page.slug === slug);

  return (
<>
<div className="page-title" data-aos="fade">
      <div className="heading">
        <div className="container">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-lg-8">
              <h1>{currentPage?.name}</h1>
              <p className="mb-0">{currentPage?.content}</p>
            </div>
          </div>
        </div>
      </div>
      <nav className="breadcrumbs">
        <div className="container">
          <ol>
            <li><Link to="/">Home</Link></li>
            <li className="current">{currentPage?.name}</li>
          </ol>
        </div>
      </nav>
    </div>
</>
  );
}