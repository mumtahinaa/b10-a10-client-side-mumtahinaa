import React from 'react';
// import Banner from '../components/Banner';
import Featured from '../components/Featured';
import Banner2 from '../components/banner2/banner2';
import Latest from '../components/Latest';
import TvSeries from '../components/TvSeries';





const Home = () => {
    
    return (
        <div>
           <Banner2></Banner2>
           <Featured ></Featured>
           <Latest></Latest>
           <TvSeries></TvSeries>
           

        </div>
    );
};

export default Home;