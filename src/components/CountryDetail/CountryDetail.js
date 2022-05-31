import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CountInfo from '../CountryInfo/CountInfo';

const CountryDetail = () => {

       const {countryName} = useParams();

       const [countrys, setCountrys] = useState([]);


       useEffect(()=> {
           const url = `https://restcountries.com/v3.1/name/${countryName}`;
           fetch(url)
           .then(res => res.json())
           .then(data => setCountrys(data));
       },[countryName])

       

    return (
        <div>
            
          
            
            {
                countrys.map(country=> <CountInfo country={country}> </CountInfo>)
            }
        
            
        </div>
    );
};

export default CountryDetail;