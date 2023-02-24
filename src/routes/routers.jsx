import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import CarListing from '../pages/CarListing';
import CarDetails from '../pages/CarDetails';
import Blog from '../pages/Blog';
import BlogDetails from '../pages/BlogDetails';
import NotFound from '../pages/NotFound';
import Contact from '../pages/Contact';

const Routers = () => {
    return (
        <Routes>
            {/* <Route path='/' element={<Navigate to='/home'/>} /> */}
            <Route path='/rent-car' element={<Navigate to='rent-car/home'/>} />
            <Route path='/rent-car/home' element={<Home/>} />
            <Route path='/rent-car/about' element={<About/>} />
            <Route path='/rent-car/Cars' element={<CarListing/>} />
            <Route path='/rent-car/Cars/:slug' element={<CarDetails/>} />
            <Route path='/rent-car/Blogs' element={<Blog/>} />
            <Route path='/rent-car/Blogs/:slug' element={<BlogDetails/>} />
            <Route path='/rent-car/contact' element={<Contact/>} />
            <Route path='/rent-car/*' element={<NotFound/>} />
        </Routes>
    )
}

export default Routers;