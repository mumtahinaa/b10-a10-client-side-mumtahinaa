import React from 'react';
import Banner from '../components/Banner';
import Featured from '../components/Featured';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    
    return (
        <div>
           <Banner></Banner> 
           <Featured ></Featured>
           

        </div>
    );
};

export default Home;