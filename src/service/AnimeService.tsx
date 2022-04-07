import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import AnimeCard from '../components/AnimeCard'
import AnimeDataModel from '../models/AnimeDataModel'
import App from '../App'



function AnimeService(AnimeServiceProps: {url: string}): any {

    let urlToFetch: string = AnimeServiceProps.url;

    const [animeArr, setArr] = useState<Array<AnimeDataModel>>([]);
    const [urlList, seturlList] = useState({})
    
    useEffect(()=>{
            fetch(urlToFetch)
                .then(response=>response.json())
                .then((data)=>{
                    setArr(data.data);
                    seturlList(data.links)
                })           
                .catch((error)=>{console.log(error)})
    
        }, [])

    return ({animeArr, urlList})
   

}

export default AnimeService


