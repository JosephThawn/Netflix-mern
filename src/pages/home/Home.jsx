import React from 'react'
import Featured from '../../components/navbar/featured/Featured';
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";




const Home = () => {
  return (
    <div className="home">
        <Navbar/>
        <Featured type="movie"/>
        


    </div>
  )
}

export default Home