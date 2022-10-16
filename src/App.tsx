import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './view/Home/component';
import Navbar from './components/Navbar/component';
import City from './view/City/component';

function App() {
  
  const [longitude, setLongitude] = useState<number>(0)
  const [latitude, setLatitude] = useState<number>(0)
  
  useEffect(() => {

    const successCallback = (position:any):any => {
      console.log(position)
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)
    }
    
    const errorCallback = (error:any):void => {
      console.warn(error)
    }
    
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
    
  }, [])
  
  console.log(latitude, longitude)
  
  useEffect(() => {
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'X-RapidAPI-Key': '9ef2805457msh307232152d64ed8p103654jsn8d24af8a1898',
    //     'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
    //   }
    // };
    
    // fetch('https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=38.5&lat=-78.5', options)
    // .then(response => response.json())
    // .then(response => console.log(response))
    // .catch(err => console.error(err));
  }, [])
  
  return (
    <div className="App">
    <Router>
    <Navbar/>
    <Routes>
    <Route path="/" element={ <Home /> } />
    <Route path="*" element={ <Home /> } />
    <Route path="/:city" element={ <City/> } />
    </Routes>
    </Router>
    </div>
    )
  }
  
  export default App;
