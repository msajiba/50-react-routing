import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Country from '../Country/Country';
// import { Link } from 'react-router-dom';

const Countries = () => {

     const [countries, setCountries] = useState([]);

    useEffect(()=> {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data.slice(0,10)));
    },[]);

    return (
        <div>
             <Outlet> </Outlet>

            <h1> This is countries page .....{countries.length} </h1>
            {
                countries.map(country=> <Country key={country.idd} country={country}> </Country>  )
            }

           
        </div>
    );
};

export default Countries;