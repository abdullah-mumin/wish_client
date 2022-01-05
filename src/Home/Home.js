import React from 'react';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import Footer from '../Footer/Footer'
// import Dashboard from '../Dashboard/Dashboard';
const Home = () => {
    return (
        <div>
            <Products/>
            <br />
            <br />
            {/* <Dashboard/> */}
            <br />
            <Reviews/>
            <br />
            <br />
            <Footer/>
        </div>
    );
};

export default Home;